var express = require('express');
var router = express.Router();
var connection = require('../conf/mysqlConnection');

router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
