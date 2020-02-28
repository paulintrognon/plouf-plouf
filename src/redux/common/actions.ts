import { createAction } from 'typesafe-actions'

export const reset = createAction('common/RESET')<undefined>()

export const backToValuesForm = createAction('common/BACK_TO_VALUES_FORM')<undefined>()
