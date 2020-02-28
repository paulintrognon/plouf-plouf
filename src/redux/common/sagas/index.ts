import { all } from 'redux-saga/effects'

import watchReset from './reset'
import watchBackToForm from './backToForm'

export default function* rootSaga() {
  yield all([watchBackToForm(), watchReset()])
}
