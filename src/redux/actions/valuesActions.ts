import { createAction } from 'typesafe-actions'
import { ADD, REMOVE, SUBMIT, RESET } from './valuesConstants'

export const add = createAction(ADD)<string>()

export const remove = createAction(REMOVE)<number>()

export const submit = createAction(SUBMIT)<undefined>()

export const reset = createAction(RESET)<undefined>()
