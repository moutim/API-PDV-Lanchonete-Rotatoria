const express = require('express');

const routes = express.Router();

const controller = require('../controllers/employees.controller');
const middlewares = require('../middlewares');

routes.get('/', controller.getEmployees);

routes.post('/', middlewares.validateCreateEmployee, controller.createEmployee);

module.exports = routes;
