import { takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import { backToValuesForm } from '../actions'
import Router from 'next/router'

function* resetWorker(): Generator {
  yield Router.push('/')
}

export default function* watchResetAction(): Generator {
  yield takeEvery(getType(backToValuesForm), resetWorker)
}
