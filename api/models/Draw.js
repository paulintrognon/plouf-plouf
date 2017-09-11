const Sequelize = require('sequelize');
const sequelize = require('../db.js').sequelize;

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
  },
  drawnValue: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    len: [1, 100],
  },
});

module.exports = Draw;
