import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import logger from 'redux-logger'
import rootEpic from './epics'
import rootReducer from './rootReducer'

const epicMiddleware = createEpicMiddleware()

const middlewares = [epicMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  epicMiddleware.run(rootEpic)

  return store
}

export default configureStore()
