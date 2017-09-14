'use strict';

const _ = require('lodash');
const randomstring = require("randomstring");
const Draw = require('../models/Draw');

module.exports = {
  create,
  get,
};

function create(data) {
  return Draw.create({
    slug: generateSlug(),
    values: JSON.stringify(data.values),
    drawnValue: _.sample(data.values),
  });
}

function get(slug) {
  return Draw.findOne({ where: { slug }})
    .then(draw => {
      draw.values = JSON.parse(draw.values);
      return draw;
    });
}

function generateSlug() {
  return randomstring.generate(7);
}
