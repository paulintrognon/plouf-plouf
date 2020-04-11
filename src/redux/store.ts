import { applyMiddleware, createStore, Middleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { logger } from 'redux-logger'
import rootSaga from './rootSaga'
import rootReducer, { RootState } from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares: Array<Middleware> = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

function configureStore(): Store<RootState> {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore()
