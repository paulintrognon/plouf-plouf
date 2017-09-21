export default reducer;

const defaultAnimation = {
    plouf1: false,
    plouf2: false,
    started: false,
    finished: false,
    values: [],
}

const defaultState = {
  draw: null,
  fetching: false,
  error: null,
  animation: defaultAnimation,
};

function reducer(state=defaultState, action) {
  switch (action.type) {
    case 'DRAW_FETCH': {
      return {...state, fetching: true, draw: null, error: null, animation: defaultAnimation};
    }
    case 'DRAW_FETCH_REJECTED': {
      return {...state, fetching: false, error: action.payload};
    }
    case 'DRAW_FETCH_FULFILLED': {
      return {...state, fetching: false, draw: action.payload};
    }

    case 'ANIMATION_PLOUF_1': {
      return {...state, animation: {
        ...state.animation,
        started: true,
        finished: false,
        plouf1: true,
        plouf2: false,
      }};
    }
    case 'ANIMATION_PLOUF_2': {
      return {...state, animation: {
        ...state.animation,
        started: true,
        finished: false,
        plouf1: false,
        plouf2: true,
      }};
    }
    case 'ANIMATION_VALUE': {
      return {...state, animation: {
        ...state.animation,
        started: true,
        finished: false,
        plouf1: false,
        plouf2: false,
        values: state.draw.values.map((value, i) => i === action.payload),
      }};
    }
    case 'ANIMATION_END': {
      return {...state, animation: {
        ...state.animation,
        started: false,
        finished: true,
      }};
    }

    default:
      return state;
  }
}
