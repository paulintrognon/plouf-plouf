import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import drawReducer from './drawReducer'
import valuesReducer from './valuesReducer'

const rootReducer = combineReducers({
  draw: drawReducer,
  values: valuesReducer,
})

export type RootState = StateType<ReturnType<typeof rootReducer>>

export default rootReducer
