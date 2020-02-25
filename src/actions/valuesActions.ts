import { action } from 'typesafe-actions'
import { ADD, REMOVE, SUBMIT } from './valuesConstants'

export const add = (value: string) => action(ADD, value)

export const remove = (index: number) => action(REMOVE, index)

export const submit = () => action(SUBMIT)
