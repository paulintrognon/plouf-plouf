export function draw(values) {
  dispatch({type: 'DRAW_START'});

  axios.get('localhost:3001/api/draw/cVSrzW6')
    .then(res => {
      dispatch({type: 'DRAW_FULFILLED', payload: res.data.draw});
    }, err => {
      dispatch({type: 'DRAW_REJECTED', payload: err});
    });
}
