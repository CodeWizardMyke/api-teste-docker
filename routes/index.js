var express = require('express');
var router = express.Router();

const indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;