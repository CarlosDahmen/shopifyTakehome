const warehouseRouter = require('express').Router();

// GET /api/gis
warehouseRouter.get('/', async (req, res, next) => {
  // try {
  //   const gis = await Gi.findAll();
  //   res.json(gis);
  // } catch (err) {
  //   next(err);
  // }
  res.send('All the warehouses')
});

module.exports = warehouseRouter
