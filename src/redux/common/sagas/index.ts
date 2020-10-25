import { all } from 'redux-saga/effects'

import watchReset from './reset'
import watchBackToForm from './backToForm'

export default function* rootSaga(): Generator {
  yield all([watchBackToForm(), watchReset()])
}
