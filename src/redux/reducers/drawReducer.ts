import { ActionType, getType } from 'typesafe-actions'
import * as actions from '../actions/drawActions'
import Draw from '../../models/Draw'
import DrawAnimation from '../../models/DrawAnimation'
import { slugToDraw } from '../../services/draw'

export type DrawAction = ActionType<typeof actions>

export interface DrawState {
  readonly draw: Draw
  readonly animation: DrawAnimation
}

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

function drawReducer(state: DrawState = initialState, action: DrawAction): DrawState {
  switch (action.type) {
    case getType(actions.loadDraw):
      return {
        ...state,
        draw: action.payload,
      }

    case getType(actions.loadFromSlug):
      return {
        ...state,
        draw: slugToDraw(action.payload),
      }

    default:
      return state
  }
}
export default drawReducer
