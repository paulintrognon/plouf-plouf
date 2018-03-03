export default reducer;

const defaultAnimation = {
    plouf1: false,
    plouf2: false,
    started: false,
    selectWinner: false,
    finished: false,
    values: [],
}

const defaultState = {
  draw: null,
  animation: defaultAnimation,
};

function reducer(state=defaultState, action) {
  switch (action.type) {
    case 'NEW_DRAW': {
      return {...state, draw: action.payload, animation: defaultAnimation};
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
    case 'ANIMATION_SELECT_WINNER': {
      return {...state, animation: {
        ...state.animation,
        values: [],
        selectWinner: true,
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
