import { from } from 'rxjs'
import { map, mergeMap, filter, ignoreElements } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { Epic } from 'redux-observable'
import Router from 'next/router'

import * as drawServie from '../../services/draw'
import { submit } from '../actions/valuesActions'

const submitEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(submit)),
    map(() => drawServie.draw(state$.value.values)),
    mergeMap(draw => from(Router.push('/d/[slug]', `/d/${draw.slug}`))),
    ignoreElements(),
  )

export default submitEpic
