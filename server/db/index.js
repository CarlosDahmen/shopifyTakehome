const db = require('./database');
const Gi = require('./models/gi')
const Warehouse = require('./models/warehouse')

//Model Associations
Warehouse.hasMany(Gi);
Gi.belongsTo(Warehouse);

module.exports = {
  db,
  Gi,
  Warehouse,
}
