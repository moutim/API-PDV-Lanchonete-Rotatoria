const express = require('express');

const routes = express.Router();

const middlewares = require('../middlewares');

routes.use('/login', require('./login'));

routes.use('/employee', require('./employee'));

routes.use('/products', middlewares.validateToken, require('./products'));

routes.use('/sales', middlewares.validateToken, require('./sales'));

module.exports = routes;
