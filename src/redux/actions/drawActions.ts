import { LOAD_DRAW, LOAD_FROM_SLUG, ANIMATION_START } from './drawConstants'
import { createAction } from 'typesafe-actions'
import Draw from '../../models/Draw'

export const loadDraw = createAction(LOAD_DRAW)<Draw>()

export const loadFromSlug = createAction(LOAD_FROM_SLUG)<string>()

export const startAnimation = createAction(ANIMATION_START)<undefined>()
