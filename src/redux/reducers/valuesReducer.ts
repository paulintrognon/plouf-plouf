import { ActionType, getType } from 'typesafe-actions'

import * as actions from '../actions/valuesActions'
import Values from '../../models/Values'

export type ValuesAction = ActionType<typeof actions>

export type ValuesState = Values

function valuesReducer(state: ValuesState = [], action: ValuesAction): ValuesState {
  switch (action.type) {
    case getType(actions.add):
      return [...state, action.payload]

    case getType(actions.remove):
      return state.filter((v, i) => i !== action.payload)

    case getType(actions.reset):
      return []

    default:
      return state
  }
}
export default valuesReducer
