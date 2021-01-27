const { Router } = require("express");
const routes = new Router();

const ProductsController = require("./controllers/ProductsController");
const MessagesController = require("./controllers/MessagesController");

routes.get("/products", ProductsController.productAction);

routes.get("/messages", MessagesController.messageAction);
routes.get("/messages", MessagesController.registerMessageAction);

module.exports = routes;
