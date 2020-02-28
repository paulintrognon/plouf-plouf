import { all } from 'redux-saga/effects'

import watchAnimationSagasAction from './features/animation/sagas'
import watchSubmitDrawAction from './features/draw/sagas'

export default function* rootSaga() {
  yield all([watchAnimationSagasAction(), watchSubmitDrawAction()])
}
