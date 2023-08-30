var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const urlBase = {url:'http://localhost:3000/'}

  res.render('index', { urlBase });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
