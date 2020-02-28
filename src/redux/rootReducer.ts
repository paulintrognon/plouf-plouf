import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import drawReducer from './features/draw/reducer'
import animationReducer from './features/animation/reducer'

const rootReducer = combineReducers({
  draw: drawReducer,
  animation: animationReducer,
})

export type RootState = StateType<ReturnType<typeof rootReducer>>

export default rootReducer
