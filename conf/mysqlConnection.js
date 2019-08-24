var mysql = require('mysql');

var dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Hashhub1!',
  database: 'izakaya'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;
