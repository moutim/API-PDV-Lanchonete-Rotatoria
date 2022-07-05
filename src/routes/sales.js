const express = require('express');

const routes = express.Router();

const controller = require('../controllers/sales.controller');

// const middlewares = require('../middlewares');

routes.get('/', controller.getSales);

routes.get('/:id', controller.getSale);

module.exports = routes;
