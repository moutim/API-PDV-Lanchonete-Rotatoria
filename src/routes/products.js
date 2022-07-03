const express = require('express');

const routes = express.Router();

const controller = require('../controllers/products.controller');

const middlewares = require('../middlewares');

routes.get('/', controller.getProducts);

routes.get('/:id', controller.getProduct);

routes.post('/', middlewares.validateCreateProduct, controller.createProduct);

routes.put('/:id', middlewares.validateCreateProduct, controller.updateProduct);

module.exports = routes;
