import * as actions from './actions'
import { select, put, takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import { RootState } from '../../rootReducer'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* startAnimation() {
  const state: RootState = yield select()
  const nbValues = state.draw.values.length

  // Before starting the animation, we go back to the top of the page
  window.scrollTo(0, 0)

  yield delay(300)
  yield put(actions.animatePlouf1())
  yield delay(300)
  yield put(actions.animatePlouf2())

  yield delay(100)

  if (nbValues <= 10) {
    const nbIterations = nbValues < 3 ? 2 : 1

    for (let iteration = 0; iteration < nbIterations; iteration++) {
      for (let index = 0; index < nbValues; index++) {
        yield delay(300)
        yield put(actions.animateValue(index))
      }
    }

    for (let index = 0; index < state.draw.drawnIndex; index++) {
      yield delay(300)
      yield put(actions.animateValue(index))
    }
  } else {
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * nbValues)
      yield delay(300)
      yield put(actions.animateValue(index))
    }
  }

  yield delay(300)
  yield put(actions.animateDrawnValue(state.draw.drawnIndex))

  yield delay(500)
  yield put(actions.end())
}

export default function* watchStartAnimationAction() {
  yield takeEvery(getType(actions.start), startAnimation)
}
