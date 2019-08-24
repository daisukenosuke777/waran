var express = require('express');
var router = express.Router();
var connection = require('../conf/mysqlConnection');
var uuid = require('uuid');

router.get('/', function(req, res, next) {
  var orderGroup = req.query.order_group;
  if (!orderGroup) {
    orderGroup = uuid.v1();
  }
  res.render('order', { order_group: orderGroup });
});

router.post('/insert', function(req, res, next) {
  var orderGroup = req.body.order_group;
  var itemName = req.body.item_name;
  var price = req.body.price;
  console.log("req:", orderGroup, itemName, price);
  var query = "INSERT INTO order_history (order_group, item_name, price, created_at, updated_at) VALUES (?, ?, ?, now(), now())";
  connection.query(query, [orderGroup, itemName, price], function(err, rows) {
    console.log(err);
    res.send("OK")
  });
});

module.exports = router;
