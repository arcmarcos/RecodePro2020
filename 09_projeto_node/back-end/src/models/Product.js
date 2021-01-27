const connect = require('../config/connect');

class Product {
  getAll(req, res) {
    connect.query('SELECT * FROM produtos', (error, result) => {
      if(!error)
        res.json(result);
      else
       res.send(error);
    });
  }
}

module.exports = new Product;