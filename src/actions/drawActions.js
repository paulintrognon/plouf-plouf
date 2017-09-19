import axios from "axios";

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
