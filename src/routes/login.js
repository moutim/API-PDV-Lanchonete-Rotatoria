const express = require('express');

const routes = express.Router();

const controller = require('../controllers/login.controller');

routes.post('/', controller.login);

module.exports = routes;