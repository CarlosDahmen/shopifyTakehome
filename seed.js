const { db } = require("./server/db");
const Gi = require('./server/db/models/gi')
const Warehouse = require('./server/db/models/warehouse')

const warehouses = [
  {
    name: 'East Coast Warehouse',
    address: 'NY',
    description: "East Coast"
  }, {
    name: 'West Coast Warehouse',
    address: 'SF',
    description: "West Coast"
  }
]

const gis = [
  {
    brand: "Wartribe",
    model: "Darkwater",
    // warehouseId: 1
  }, {
    brand: "Wartribe",
    model: "Reaper",
    // warehouseId: 2
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true });
    return Promise.all([
      Gi.create({ brand: "Wartribe", model: "Darkwater" }),
      Gi.create({ brand: "Wartribe", model: "Reaper" }),
      Warehouse.create({name: 'East Coast Warehouse', address: 'NY', description: "East Coast" }),
      Warehouse.create({ name: 'West Coast Warehouse', address: 'SF', description: "West Coast"}),
    ])
    .then(([gi1, gi2, warehouse1, warehouse2,]) => {
      return Promise.all([
        gi1.setWarehouse(warehouse1),
        gi2.setWarehouse(warehouse2),
      ]);
    })

  } catch (err) {
    (err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      ("Seeding success!");
      db.close();
    })
    .catch(err => {
      console.error("DB Seed failed");
      console.error(err);
      db.close();
    });
}

