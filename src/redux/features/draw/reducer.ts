import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { slugToDraw, drawIndex } from './services'
import Draw from './models/Draw'
import { importValuesFromString } from './services/importValuesFromString'

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
          // If we have more than 100 values, we add the new value at the beginning
          // so that we can visualize it being added to the list
          values:
            state.draw.values.length < 100
              ? [...state.draw.values, action.payload]
              : [action.payload, ...state.draw.values],
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

    case getType(actions.importValues):
      return {
        ...state,
        draw: {
          ...state.draw,
          values: importValuesFromString(action.payload),
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
