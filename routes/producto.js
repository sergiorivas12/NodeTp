var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('producto');
});

router.get('/new', function(req, res, next) {
  res.render('productosNuevos');
});

module.exports = router;
