import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'
// import draw from './drawReducer';
import valuesReducer from './valuesReducer'

const rootReducer = combineReducers({
  // draw,
  values: valuesReducer,
})

export type RootState = StateType<ReturnType<typeof rootReducer>>

export default rootReducer
