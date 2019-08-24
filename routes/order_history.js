var express = require('express');
var router = express.Router();
var connection = require('../conf/mysqlConnection');

router.get('/', function(req, res, next) {
  var orderGroup = req.query.order_group;
  console.log(orderGroup);
  var query = "SELECT id, item_name, price, DATE_FORMAT(created_at,'%Y/%m/%d %H:%i:%s') as order_time FROM order_history WHERE order_group = ? ORDER BY id DESC";
  connection.query(query, [orderGroup], function(err, rows) {
    connection.query(query, [orderGroup], function(err, rows) {
      res.render('order_history', { rows: rows, order_group: orderGroup });
    });
  });
  
});

module.exports = router;
