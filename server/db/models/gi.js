const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('gi', {
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  }
});
