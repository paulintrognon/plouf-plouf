import { takeEvery, put } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import * as drawActions from '../../features/draw/actions'
import { reset } from '../actions'
import Router from 'next/router'

function* resetWorker() {
  yield Router.push('/')
  yield put(drawActions.reset())
}

export default function* watchResetAction() {
  yield takeEvery(getType(reset), resetWorker)
}
