import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import drawReducer, { DrawState } from './features/draw/reducer'
import animationReducer, { AnimationState } from './features/animation/reducer'

const rootReducer = combineReducers({
  draw: drawReducer,
  animation: animationReducer,
})

export interface RootState {
  draw: DrawState
  animation: AnimationState
}

// export type RootState = StateType<ReturnType<typeof rootReducer>>

export default rootReducer
