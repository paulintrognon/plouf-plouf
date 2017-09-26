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
    return res.status(400).send({
      error: 'values-not-an-array',
      message: '`values` needs to be an array of string.',
    });
  }

  if (values.length < 2) {
    return res.status(400).send({
      error: 'not-enough-values',
      message: 'There needs to be at least 2 values in `values`.',
    });
  }

  if(values.some(value => !_.isString(value))) {
    return res.status(400).send({
      error: 'value-not-a-string',
      message: 'All values need to be a string.',
    });
  }

  drawManager.create({ values })
    .then(draw => {
      res.send({ draw });
    });
}

function get(req, res) {
  const slug = req.params.slug;

  drawManager.get(slug)
    .then(draw => {
      res.send({ draw });
    });
}
