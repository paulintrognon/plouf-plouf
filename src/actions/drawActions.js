import api from '../services/api';
import bluebird from 'bluebird';
import _ from 'lodash';

import { push } from 'react-router-redux';

export function fetchAction(slug) {
  return (dispatch) => {
    dispatch({type: 'DRAW_FETCH'});

    api.get(`/draw/${slug}`)
      .then(res => {
        dispatch({type: 'DRAW_FETCH_FULFILLED', payload: res.data.draw});
      }, err => {
        dispatch({type: 'DRAW_FETCH_REJECTED', payload: err});
      });
  }
}

export function drawAction(values) {
  return (dispatch, getState) => {
    const state = getState();
    values = values || state.values;
    if (values.length < 2) {
      return;
    }

    dispatch({type: 'DRAW_FETCH'});

    api.post(`/draw`, { values })
      .then(res => {
        dispatch({type: 'CLEAR_VALUES'});
        dispatch({type: 'DRAW_FETCH_FULFILLED', payload: res.data.draw});
        dispatch(push('/d/'+res.data.draw.slug));
      }, err => {
        dispatch({type: 'DRAW_FETCH_REJECTED', payload: err});
      });
  };
}

export function restartAction() {
  return dispatch => {
    dispatch(push('/'));
  };
}

export function startAnimationAction(draw) {
  const nbValues = draw.values.length;
  const drawnValueIndex = draw.values.indexOf(draw.drawnValue);
  return dispatch => {
    dispatch({type: 'ANIMATION_PLOUF_1'});
    bluebird.delay(300)
      .then(() => {
        dispatch({type: 'ANIMATION_PLOUF_2'});
        return bluebird.delay(500);
      })
      .then(() => {
        let nbOfIterations = nbValues + drawnValueIndex;
        if (nbValues < 3) {
          nbOfIterations += nbValues;
        }
        return bluebird.each(_.range(nbOfIterations), n => {
          let i = n % nbValues;
          dispatch({type: 'ANIMATION_VALUE', payload: i});
          return bluebird.delay(300);
        });
      })
      .then(() => {
        dispatch({type: 'ANIMATION_SELECT_WINNER'});
        return bluebird.delay(500);
      })
      .then(() => {
        dispatch({type: 'ANIMATION_END'});
      });
  }
}
