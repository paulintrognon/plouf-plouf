import { createAction } from 'typesafe-actions'

export const start = createAction('animation/START')<undefined>()

export const end = createAction('animation/END')<undefined>()

export const animatePlouf1 = createAction('animation/ANIMATE_PLOUF_1')<undefined>()

export const animatePlouf2 = createAction('animation/ANIMATE_PLOUF_2')<undefined>()

export const animateValue = createAction('animation/ANIMATE_VALUE')<number>()

export const animateDrawnValue = createAction('animation/ANIMATE_DRAWN_VALUE')<number>()

export const reset = createAction('animation/RESET')<undefined>()
