const express = require('express');

const routes = express.Router();

routes.use('/login', require('./login'));

routes.use('/employee', require('./employee'));

routes.use('/products', require('./products'));

module.exports = routes;
