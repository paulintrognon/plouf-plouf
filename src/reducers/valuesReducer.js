export default reducer;

const defaultState = [];

function reducer(state=defaultState, action) {
  if (action.type === 'ADD_VALUE') {
    return addValue(state, action);
  }
  if (action.type === 'REMOVE_VALUE') {
    return removeValue(state, action);
  }
  if (action.type === 'CLEAR_VALUES') {
    return [];
  }
  return state;
}

function addValue(state, action) {
  return state.concat(action.payload);
}

function removeValue(state, action) {
  return state.filter((v, i) => i !== action.payload);
}
