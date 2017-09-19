export default reducer;

const defaultState = {
  draw: null,
  fetching: false,
  error: null,
};

function reducer(state=defaultState, action) {
  switch (action.type) {
    case 'DRAW_FETCH': {
      return {...state, fetching: true, draw: null, error: null};
    }
    case 'DRAW_FETCH_REJECTED': {
      return {...state, fetching: false, error: action.payload};
    }
    case 'DRAW_FETCH_FULFILLED': {
      return {...state, fetching: false, draw: action.payload};
    }
    default:
      return state;
  }
}
