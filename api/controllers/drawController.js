'use strict';

const _ = require('lodash');
const drawManager = require('../models/drawManager');

module.exports = {
  create,
  get,
};

function create(req, res) {
  const values = req.body.values;

  if (!_.isArray(values)) {
    return {
      status: 400,
      error: 'values-not-an-array',
      message: '`values` needs to be an array of string.',
    };
  }

  if (values.length < 2) {
    return {
      status: 400,
      error: 'not-enough-values',
      message: 'There needs to be at least 2 values in `values`.',
    };
  }

  if(values.some(value => !_.isString(value))) {
    return {
      status: 400,
      error: 'value-not-a-string',
      message: 'All values need to be a string.',
    };
  }

  return drawManager.create({ values })
    .then(draw => ({ draw }));
}

function get(req, res) {
  const slug = req.params.slug;

  return drawManager.get(slug)
    .then(draw => ({ draw }));
}
