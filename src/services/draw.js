export default {
  draw,
  serialize,
  unserialize,
};

function draw(values) {
  return {
    values,
    drawnIndex: randomIndex(values),
  };
}

/**
 * Turns
 *   { values: ['a', 'b'], drawnIndex: 1 }
 * Into
 *   'a,b=>0'
 */
function serialize(result) {
  const str = result.values.join(',') + '=>' + result.drawnIndex;
  return btoa(str);
}

/**
 * Turns
 *   'a,b=>0'
 * Into
 *   { values: ['a', 'b'], result: 1 }
 */
function unserialize(b64) {
  const str = atob(b64);
  const split = str.split('=>');
  const values = split[0].split(',');
  return {
    values,
    drawnIndex: parseInt(split[1], 10),
  };
}

function randomIndex(values) {
  return Math.floor(Math.random()*values.length);
}
