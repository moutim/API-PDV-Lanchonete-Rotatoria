const express = require('express');

const routes = express.Router();

const middlewares = require('../middlewares');

routes.use('/login', require('./login'));

routes.use('/employee', middlewares.validateToken, require('./employee'));

routes.use('/products', middlewares.validateToken, require('./products'));

routes.use('/sales', require('./sales'));

module.exports = routes;
