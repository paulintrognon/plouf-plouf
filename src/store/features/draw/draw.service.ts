import Router from 'next/router'

import { drawSlice } from './draw.slice'
import { drawIndex, drawToSlug } from './helpers'
import Values from './types/Values.type'
import { store } from '../../store'
import { animationSlice } from '../animation/animation.slice'
import Draw from './types/Draw.type'

export function drawValueAndStartAnimation(values: Values) {
  const drawnIndex = drawIndex(values)
  store.dispatch(animationSlice.actions.reset())
  const newDraw: Draw = {
    values,
    drawnIndex,
  }
  store.dispatch(drawSlice.actions.setDraw(newDraw))
  const slug = drawToSlug(newDraw)
  Router.push('/r', `/r#${slug}`)
}
