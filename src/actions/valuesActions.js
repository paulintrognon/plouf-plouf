export function addValue(value) {
  return {
    type: 'ADD_VALUE',
    payload: value,
  };
}

export function removeValue(index) {
  return {
    type: 'REMOVE_VALUE',
    payload: index,
  };
}
