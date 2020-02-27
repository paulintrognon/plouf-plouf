import { ADD_VALUE, REMOVE_VALUE, DRAW_VALUE, LOAD_FROM_SLUG, RESET } from './constants'
import { createAction } from 'typesafe-actions'

export const addValue = createAction(ADD_VALUE)<string>()

export const removeValue = createAction(REMOVE_VALUE)<number>()

export const drawValue = createAction(DRAW_VALUE)<undefined>()

export const loadFromSlug = createAction(LOAD_FROM_SLUG)<string>()

export const reset = createAction(RESET)<undefined>()
