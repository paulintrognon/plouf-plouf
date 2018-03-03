import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { routerMiddleware as router } from 'react-router-redux';

import reducers from './reducers';
import history from './history';

const middlewares = [
  promise(),
  thunk,
  router(history),
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default createStore(reducers, middleware);
