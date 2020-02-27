import { ActionType } from 'typesafe-actions'
import * as drawActions from './features/draw/actions'

const rootAction = {
  draw: drawActions,
}
export default rootAction

export type RootAction = ActionType<typeof rootAction>
