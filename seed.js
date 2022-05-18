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
    model: "Darkwater"
  }, {
    brand: "Wartribe",
    model: "Reaper"
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(gis.map(gi => {
      return Gi.create(gi);
    }))
    await Promise.all(warehouses.map(warehouse => {
      return Warehouse.create(warehouse);
    }))
    // seed your database here
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch(err => {
      console.error("DB Seed failed");
      console.error(err);
      db.close();
    });
}

