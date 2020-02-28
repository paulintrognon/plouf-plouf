import { createAction } from 'typesafe-actions'
import {
  RESET,
  START,
  END,
  ANIMATE_PLOUF_1,
  ANIMATE_VALUE,
  ANIMATE_DRAWN_VALUE,
  ANIMATE_PLOUF_2,
} from './constants'

export const reset = createAction(RESET)<undefined>()

export const start = createAction(START)<undefined>()

export const end = createAction(END)<undefined>()

export const animatePlouf1 = createAction(ANIMATE_PLOUF_1)<undefined>()

export const animatePlouf2 = createAction(ANIMATE_PLOUF_2)<undefined>()

export const animateValue = createAction(ANIMATE_VALUE)<number>()

export const animateDrawnValue = createAction(ANIMATE_DRAWN_VALUE)<number>()
