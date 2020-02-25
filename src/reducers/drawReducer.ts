import { ActionType } from 'typesafe-actions'

import * as actions from '../actions/drawActions'
import { SUBMIT } from '../actions/drawConstants'
import Draw from '../models/Draw'
import DrawAnimation from '../models/DrawAnimation'

export type DrawAction = ActionType<typeof actions>

export type DrawState = Readonly<{
  draw: Draw
  animation: DrawAnimation
}>

const initialState: DrawState = {
  draw: {
    values: [],
    drawnIndex: null,
    slug: null,
  },
  animation: {
    plouf1: false,
    plouf2: false,
    started: false,
    selectWinner: false,
    finished: false,
    values: [],
  },
}

function drawReducer(state: DrawState = initialState, action: DrawAction) {
  switch (action.type) {
    case SUBMIT: {
      return { ...state, draw: action.payload, animation: initialState.animation }
    }

    default:
      return state
  }
}
export default drawReducer
