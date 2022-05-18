const giRouter = require('express').Router();

// GET /api/gis
giRouter.get('/', async (req, res, next) => {
  // try {
  //   const gis = await Gi.findAll();
  //   res.json(gis);
  // } catch (err) {
  //   next(err);
  // }
  res.send('All the gis')
});

module.exports = giRouter
