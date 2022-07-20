import Router from 'next/router'
import { put, select, takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'

import { RootState } from '../../rootReducer'
import { reset } from '../animation/actions'
import * as actions from './actions'
import { drawToSlug } from './services'

function* drawValueWorker() {
  const state: RootState = yield select()
  const slug = drawToSlug(state.draw.draw)
  yield put(reset())
  yield Router.push('/r', `/r#${slug}`)
}

function* testWorker() {
  yield Router.push('/')
}

export default function* watchDrawValueAction() {
  yield takeEvery(getType(actions.drawValue), drawValueWorker)
  yield takeEvery(getType(actions.importValues), testWorker)
}
