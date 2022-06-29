const express = require('express');

const routes = express.Router();

const controller = require('../controllers/employees.controller');

routes.post('/', controller.createEmployee);

module.exports = routes;
