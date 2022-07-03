const express = require('express');

const routes = express.Router();

const controller = require('../controllers/products.controller');

routes.get('/', controller.getProducts);

module.exports = routes;
