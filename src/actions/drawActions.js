import api from '../services/api';
import drawService from '../services/draw';
import bluebird from 'bluebird';
import _ from 'lodash';

import { push } from 'react-router-redux';

export function fetchAction(slug) {
  return (dispatch) => {
    const draw = drawService.unserialize(slug);
    draw.slug = slug;
    dispatch({type: 'NEW_DRAW', payload: draw});

    logDraw(draw);
  }
}

export function drawAction(values) {
  return (dispatch, getState) => {
    const state = getState();
    values = values || state.values;
    if (values.length < 2) {
      return;
    }

    const draw = drawService.draw(values);
    draw.slug = drawService.serialize(draw);

    dispatch({type: 'CLEAR_VALUES'});
    dispatch({type: 'NEW_DRAW', payload: draw});
    dispatch(push('/d/'+draw.slug));

    logDraw(draw);
  };
}

export function restartAction() {
  return dispatch => {
    dispatch(push('/'));
  };
}

export function startAnimationAction(draw) {
  const nbValues = draw.values.length;
  return dispatch => {
    dispatch({type: 'ANIMATION_PLOUF_1'});
    bluebird.delay(300)
      .then(() => {
        dispatch({type: 'ANIMATION_PLOUF_2'});
        return bluebird.delay(500);
      })
      .then(() => {
        let nbOfIterations = nbValues + draw.drawnIndex;
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

function logDraw(draw) {
  api.post('/log', {
    values: draw.values,
    result: draw.values[draw.drawnIndex],
    slug: draw.slug,
  });
}
