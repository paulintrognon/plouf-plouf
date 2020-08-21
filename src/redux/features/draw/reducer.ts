import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { slugToDraw, drawIndex } from './services'
import Draw from './models/Draw'

export type DrawAction = ActionType<typeof actions>

export type DrawState = {
  draw: Draw
  hasError: boolean
}
const initialState: DrawState = {
  draw: {
    values: [],
    drawnIndex: null,
  },
  hasError: false,
}

export default function reduce(state: DrawState = initialState, action: DrawAction): DrawState {
  switch (action.type) {
    case getType(actions.addValue):
      return {
        ...state,
        draw: {
          ...state.draw,
          values: [...state.draw.values, action.payload],
        },
      }

    case getType(actions.removeValue):
      return {
        ...state,
        draw: {
          ...state.draw,
          values: state.draw.values.filter((v, i) => i !== action.payload),
        },
      }

    case getType(actions.drawValue):
      return {
        ...state,
        draw: {
          ...state.draw,
          drawnIndex: drawIndex(state.draw.values),
        },
      }

    case getType(actions.loadFromSlug):
      try {
        return {
          ...state,
          hasError: false,
          draw: slugToDraw(action.payload),
        }
      } catch (err) {
        return {
          ...state,
          hasError: true,
        }
      }

    case getType(actions.reset):
      return initialState

    default:
      return state
  }
}
