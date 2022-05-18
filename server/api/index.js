const router = require("express").Router();

router.use('/gis', require('./giRouter'))
router.use('/warehouses', require('./warehouseRouter'))

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
