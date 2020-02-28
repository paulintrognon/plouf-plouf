import { takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import { backToValuesForm } from '../actions'
import Router from 'next/router'

function* resetWorker() {
  yield Router.push('/')
}

export default function* watchResetAction() {
  yield takeEvery(getType(backToValuesForm), resetWorker)
}
