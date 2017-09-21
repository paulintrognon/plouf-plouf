import axios from 'axios';
import bluebird from 'bluebird';
import _ from 'lodash';

import { push } from 'react-router-redux';

export function fetch(slug) {
  return (dispatch) => {
    dispatch({type: 'DRAW_FETCH'});

    axios.get('http://localhost:3001/api/draw/'+slug)
      .then(res => {
        dispatch({type: 'DRAW_FETCH_FULFILLED', payload: res.data.draw});
      }, err => {
        dispatch({type: 'DRAW_FETCH_REJECTED', payload: err});
      });
  }
}

export function draw(values) {
  return (dispatch) => {
    dispatch({type: 'DRAW_FETCH'});

    axios.post('http://localhost:3001/api/draw', { values })
      .then(res => {
        dispatch({type: 'CLEAR_VALUES'});
        dispatch({type: 'DRAW_FETCH_FULFILLED', payload: res.data.draw});
        dispatch(push('/d/'+res.data.draw.slug));
      }, err => {
        dispatch({type: 'DRAW_FETCH_REJECTED', payload: err});
      });
  };
}

export function startAnimation(draw) {
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
        const nbOfIterations = nbValues + drawnValueIndex;
        return bluebird.each(_.range(nbOfIterations), n => {
          let i = n % nbValues;
          dispatch({type: 'ANIMATION_VALUE', payload: i});
          return bluebird.delay(300);
        });
      })
      .then(() => {
        dispatch({type: 'ANIMATION_END'});
      });
  }
}
