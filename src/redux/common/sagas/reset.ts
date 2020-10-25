import { takeEvery, put } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import * as drawActions from '../../features/draw/actions'
import { reset } from '../actions'
import Router from 'next/router'

function* resetWorker(): Generator {
  yield Router.push('/')
  yield put(drawActions.reset())
}

export default function* watchResetAction(): Generator {
  yield takeEvery(getType(reset), resetWorker)
}
