import { from } from 'rxjs'
import { map, mergeMap, filter, ignoreElements } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { Epic } from 'redux-observable'
import Router from 'next/router'
import { RootState } from '../rootReducer'
import { RootAction } from '../rootAction'
import { drawValue } from '../features/draw/actions'
import { drawToSlug } from '../features/draw/service'

const submitEpic: Epic<RootAction, RootAction, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(drawValue)),
    map(() => drawToSlug(store.value.draw)),
    mergeMap(slug => from(Router.push('/d/[slug]', `/d/${slug}`))),
    ignoreElements(),
  )

export default submitEpic
