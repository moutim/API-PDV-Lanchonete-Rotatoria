const express = require('express');

const routes = express.Router();

routes.use('/login', require('./login'));

routes.use('/employee', require('./employee'));

module.exports = routes;