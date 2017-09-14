export default reducer;

const defaultState = {
  draw: {
    slug: null,
    values: [],
    drawnValue: null,
  },
  fetching: false,
  fetched: false,
  error: null,
};

function reducer(state=defaultState, action) {
  switch (action.type) {
    case 'DRAW_FETCH': {
      return {...state, fetching: true, fetched: false, error: null};
    }
    case 'DRAW_FETCH_REJECTED': {
      return {...state, fetching: false, fetched: false, error: action.payload};
    }
    case 'DRAW_FETCH_FULFILLED': {
      return {...state,  fetching: false, fetched: true, draw: action.payload};
    }
    default:
      return state;
  }
}
