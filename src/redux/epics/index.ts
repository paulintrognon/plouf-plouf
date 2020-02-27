import { combineEpics } from 'redux-observable'
import submitEpic from './submitEpic'

export default combineEpics(submitEpic)
