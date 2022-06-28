const express = require('express');

const routes = express.Router();

const controller = require('../controllers/login.controller');

routes.get('/', controller.login);

module.exports = routes;