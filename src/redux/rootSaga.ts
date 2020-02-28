import { all } from 'redux-saga/effects'

import animationSagas from './features/animation/sagas'
import drawSagas from './features/draw/sagas'
import commonSagas from './common/sagas'

export default function* rootSaga() {
  yield all([animationSagas(), drawSagas(), commonSagas()])
}
