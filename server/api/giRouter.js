const Gi = require('../db/models/gi');
// const Warehouse = require('../db/models/warehouse')
const giRouter = require('express').Router();


// GET /api/gis/:giId
giRouter.get('/:id', async (req, res, next) => {
  try {
    const gi = await Gi.findOne(
      {where: {id: req.params.id}}
    );
    // const campus = await Warehouse.findOne(
    //     {where: {id: gi.warehouseId}}
    //   )
    res.json({gi})
    // res.json({gi, warehouse});
    } catch (err) {
      next(err);
    }
});

//PUT /api/gis/:id
giRouter.put('/:id', async (req, res, next) => {
  try {
    const toUpdate = await Gi.findByPk(req.params.id);
    if (req.body.model){
      res.send(await toUpdate.update(req.body))
    }
    // else {res.send(await toUpdate.update({warehouseId: null}))}
  } catch (err) {
    next(err)
  }
})

// GET /api/gis
giRouter.get('/', async (req, res, next) => {
  try {
    const gis = await Gi.findAll();
    res.json(gis);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/gis/:id
giRouter.delete('/:id', async (req, res, next) => {
  try {
    const toDestroy = await Gi.findByPk(req.params.id);
    await toDestroy.destroy();
    res.send(toDestroy);
  } catch (err) {
    next(err)
  }
});

// POST /api/gis
giRouter.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Gi.create(req.body));
  } catch (err) {
    next(err)
  }
})

module.exports = giRouter
