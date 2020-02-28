import { ActionType } from 'typesafe-actions'
import * as drawActions from './features/draw/actions'
import * as animationActions from './features/animation/actions'

const rootAction = {
  draw: drawActions,
  animation: animationActions,
}
export default rootAction

export type RootAction = ActionType<typeof rootAction>
