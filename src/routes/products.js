const express = require('express');

const routes = express.Router();

const controller = require('../controllers/products.controller');

routes.get('/', controller.getProducts);

routes.get('/:id', controller.getProduct);

module.exports = routes;
