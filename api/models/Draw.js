const Sequelize = require('sequelize');
const sequelize = require('../db').sequelize;

const Draw = sequelize.define('draw', {
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    len: [2, 100],
  },
  values: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true,
    get: function (values) {
      return JSON.parse(this.getDataValue(values));
    },
    set: function (values) {
      this.setDataValue('values', JSON.stringify(values));
    },
  },
  drawnValue: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    len: [1, 100],
  },
});

module.exports = Draw;
