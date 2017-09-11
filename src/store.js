import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

const middleware = applyMiddleware(promise(), logger);

export default createStore(reducers, middleware);
