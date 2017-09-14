import { combineReducers } from 'redux';

import draw from './drawReducer';
import values from './valuesReducer';

export default combineReducers({
  draw,
  values,
});
