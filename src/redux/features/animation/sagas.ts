import * as actions from './actions'
import { select, put, takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import { RootState } from '../../rootReducer'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* startAnimation() {
  const state: RootState = yield select()
  const nbValues = state.draw.values.length

  yield delay(300)
  yield put(actions.animatePlouf1())
  yield delay(300)
  yield put(actions.animatePlouf2())

  let nbIterations = 1
  if (nbValues < 3) {
    nbIterations = 2
  }
  if (nbValues > 12) {
    nbIterations = 0
  }

  yield delay(100)

  for (let iteration = 0; iteration < nbIterations; iteration++) {
    for (let index = 0; index < state.draw.values.length; index++) {
      yield delay(300)
      yield put(actions.animateValue(index))
    }
  }

  for (let index = 0; index < state.draw.drawnIndex; index++) {
    yield delay(300)
    yield put(actions.animateValue(index))
  }

  yield delay(300)
  yield put(actions.animateDrawnValue(state.draw.drawnIndex))

  yield delay(500)
  yield put(actions.end())
}

export default function* watchStartAnimationAction() {
  yield takeEvery(getType(actions.start), startAnimation)
}
