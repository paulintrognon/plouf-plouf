import { SUBMIT } from './drawConstants'
import { action } from 'typesafe-actions'
import { Dispatch } from 'redux'
import Values from '../models/Values'
import Router from 'next/router'

export const draw = (values: Values) => async (dispatch: Dispatch): Promise<void> => {
  Router.push('/d/coucou')
}

// export const startAnimation = () => async (dispatch: Dispatch): Promise<void> => {
// }
