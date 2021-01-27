const mysql = require('mysql');

const connect = mysql.createConnection({
  host: 'localhost', 
  user: 'eds_admin',
  password: '',
  database: 'eletro_dev_store'
});

module.exports = connect;