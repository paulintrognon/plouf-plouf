import { createAction } from 'typesafe-actions'

export const addValue = createAction('draw/ADD_VALUE')<string>()

export const removeValue = createAction('draw/REMOVE_VALUE')<number>()

export const importValues = createAction('draw/IMPORT_VALUES')<string>()

export const drawValue = createAction('draw/DRAW_VALUE')<undefined>()

export const loadFromSlug = createAction('draw/LOAD_FROM_SLUG')<string>()

export const reset = createAction('draw/RESET')<undefined>()
