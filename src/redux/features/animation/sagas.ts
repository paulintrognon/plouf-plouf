import * as actions from './actions'
import { select, put, takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import { RootState } from '../../rootReducer'

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))
const DELAY_MS = 300
const MAX_VALUES_TO_ANIMATE = 6

export function* startAnimation(): Generator {
  const state = (yield select()) as RootState
  const nbValues = state.draw.draw.values.length

  // If there is no draw, we stop here
  if (state.draw.draw.drawnIndex === null) {
    return
  }

  // Before starting the animation, we go back to the top of the page
  window.scrollTo(0, 0)

  // Animate title
  yield delay(DELAY_MS)
  yield put(actions.animatePlouf1())
  yield delay(DELAY_MS)
  yield put(actions.animatePlouf2())
  yield delay(100)

  // If there is less than MAX_VALUES_TO_ANIMATE values, we animate them all in turn
  if (nbValues < MAX_VALUES_TO_ANIMATE) {
    const nbIterations = nbValues < 3 ? 2 : 1

    for (let iteration = 0; iteration < nbIterations; iteration++) {
      for (let index = 0; index < nbValues; index++) {
        yield delay(DELAY_MS)
        yield put(actions.animateValue(index))
      }
    }

    for (let index = 0; index < state.draw.draw.drawnIndex; index++) {
      yield delay(DELAY_MS)
      yield put(actions.animateValue(index))
    }
  }
  // If there is more than MAX_VALUES_TO_ANIMATE values, we animate MAX_VALUES_TO_ANIMATE randomly picked values
  else {
    // We create a list of indices of candidates values to be animated
    const indices = Object.keys(state.draw.draw.values)
    indices.splice(state.draw.draw.drawnIndex, 1) // We exclude the result from the candidates

    for (let i = 0; i < MAX_VALUES_TO_ANIMATE - 1; i++) {
      const index = Math.floor(Math.random() * indices.length) // We pick a value from the (remaining) candidates
      yield delay(DELAY_MS)
      yield put(actions.animateValue(Number(indices[index])))
      indices.splice(index, 1) // If a value has been chosen to be animated, we remove it from the candidates
    }
  }

  yield delay(DELAY_MS)
  yield put(actions.animateDrawnValue(state.draw.draw.drawnIndex))

  yield delay(500)
  yield put(actions.end())
}

export default function* watchStartAnimationAction(): Generator {
  yield takeEvery(getType(actions.start), startAnimation)
}
