const Warehouse = require('../db/models/warehouse');
const Gi = require('../db/models/gi')
const warehouseRouter = require('express').Router();

// GET /api/warehouses/:warehouseId
warehouseRouter.get('/:id', async (req, res, next) => {
  try {
    const warehouse = await Warehouse.findOne(
      {where: {id: req.params.id}}
      );

    const gis = await Gi.findAll(
      {where: {warehouseId: req.params.id}}
    )
    res.json({warehouse, gis})
  } catch (err) {
    next(err);
  }
});

//PUT /api/warehouses/:id
warehouseRouter.put('/:id', async (req, res, next) => {
  try {
    const toUpdate = await Warehouse.findByPk(req.params.id);
    res.send(await toUpdate.update(req.body))
  } catch (err) {
    next(err)
  }
})

// GET /api/warehouses
warehouseRouter.get('/', async (req, res, next) => {
  try {
    const warehouses = await Warehouse.findAll();
    res.json(warehouses);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/warehouses/:id
warehouseRouter.delete('/:id', async (req, res, next) => {
  try {
    const toDestroy = await Warehouse.findByPk(req.params.id);
    await toDestroy.destroy();
    res.send(toDestroy);
  } catch (err) {
    next(err)
  }
});

// POST /api/warehouses
warehouseRouter.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Warehouse.create(req.body));
  } catch (err) {
    next(err)
  }
})

module.exports = warehouseRouter
