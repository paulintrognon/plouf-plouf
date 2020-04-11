import * as actions from './actions'
import { ActionType, getType } from 'typesafe-actions'
import Animation from './models/Animation'

export type AnimationAction = ActionType<typeof actions>

export type AnimationState = Animation
const initialState: AnimationState = {
  started: false,
  plouf1: false,
  plouf2: false,
  value: null,
  selectWinner: false,
  ended: false,
}

export default function(
  state: AnimationState = initialState,
  action: AnimationAction,
): AnimationState {
  switch (action.type) {
    case getType(actions.reset):
      return {
        ...initialState,
      }

    case getType(actions.start):
      return {
        ...initialState,
        started: true,
      }

    case getType(actions.animatePlouf1):
      return {
        ...state,
        plouf1: true,
      }

    case getType(actions.animatePlouf2):
      return {
        ...state,
        plouf1: false,
        plouf2: true,
      }

    case getType(actions.animateValue):
      return {
        ...state,
        plouf2: false,
        value: action.payload,
      }

    case getType(actions.animateDrawnValue):
      return {
        ...state,
        value: action.payload,
        selectWinner: true,
      }

    case getType(actions.end):
      return {
        ...state,
        started: false,
        ended: true,
      }

    default:
      return state
  }
}
