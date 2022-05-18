const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('warehouse', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  description: {
    type: Sequelize.TEXT
  }
});
