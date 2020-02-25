import { ActionType } from 'typesafe-actions'

import * as actions from '../actions/valuesActions'
import { ADD, REMOVE } from '../actions/valuesConstants'
import Values from '../models/Values'

export type ValuesAction = ActionType<typeof actions>

export type ValuesState = Values

function valuesReducer(state: ValuesState = [], action: ValuesAction): ValuesState {
  switch (action.type) {
    case ADD:
      return [...state, action.payload]

    case REMOVE:
      return state.filter((v, i) => i !== action.payload)

    default:
      return state
  }
}
export default valuesReducer
