import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import drawReducer from './features/draw/reducer'

const rootReducer = combineReducers({
  draw: drawReducer,
})

export type RootState = StateType<ReturnType<typeof rootReducer>>

export default rootReducer
