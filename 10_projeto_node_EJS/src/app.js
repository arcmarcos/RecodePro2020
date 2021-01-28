const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.appConfig();
    this.routes();
  }

  appConfig() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({extended: true}));
    this.server.set('view engine', 'ejs');
    this.server.set('views', './src/views')
  }

  routes() {
    this.server.use(routes);
  }
}

const app = new App;

module.exports = app.server;