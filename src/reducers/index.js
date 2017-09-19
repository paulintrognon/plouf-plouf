import { combineReducers } from 'redux';

import draw from './drawReducer';
import values from './valuesReducer';
import { routerReducer as router } from 'react-router-redux';

export default combineReducers({
  draw,
  values,
  router,
});
