import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { slugToDraw, drawIndex } from './services'
import Draw from './models/Draw'

export type DrawAction = ActionType<typeof actions>

export type DrawState = Draw
const initialState: DrawState = {
  values: [],
  drawnIndex: null,
}

export default (state: DrawState = initialState, action: DrawAction): DrawState => {
  switch (action.type) {
    case getType(actions.addValue):
      return {
        ...state,
        values: [...state.values, action.payload],
      }

    case getType(actions.removeValue):
      return {
        ...state,
        values: state.values.filter((v, i) => i !== action.payload),
      }

    case getType(actions.drawValue):
      return {
        ...state,
        drawnIndex: drawIndex(state.values),
      }

    case getType(actions.loadFromSlug):
      return slugToDraw(action.payload)

    case getType(actions.reset):
      return initialState

    default:
      return state
  }
}
