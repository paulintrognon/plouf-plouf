import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import logger from 'redux-logger'
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore()
