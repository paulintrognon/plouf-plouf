'use strict';

const _ = require('lodash');
const bluebird = require('bluebird');
const drawManager = require('../models/drawManager');

module.exports = {
  create,
  get,
};

function create(req, res) {
  const values = req.body.values;

  if (!_.isArray(values)) {
    return bluebird.reject({
      status: 400,
      name: 'values-not-an-array',
      message: '`values` needs to be an array of string.',
    });
  }

  if (values.length < 2) {
    return bluebird.reject({
      status: 400,
      name: 'not-enough-values',
      message: 'There needs to be at least 2 values in `values`.',
    });
  }

  if(values.some(value => !_.isString(value))) {
    return bluebird.reject({
      status: 400,
      name: 'value-not-a-string',
      message: 'All values need to be a string.',
    });
  }

  return drawManager.create({ values })
    .then(draw => ({ draw }));
}

function get(req, res) {
  const slug = req.params.slug;

  return drawManager.get(slug)
    .then(draw => ({ draw }));
}
