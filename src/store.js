import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { routerMiddleware as router } from 'react-router-redux';

import reducers from './reducers';
import history from './history';

const middleware = applyMiddleware(promise(), thunk, router(history), logger);

export default createStore(reducers, middleware);
