const express = require('express');

const routes = express.Router();

const controller = require('../controllers/employees.controller');
const middlewares = require('../middlewares');

routes.get('/', controller.getEmployees);

routes.get('/:id', controller.getEmployee);

routes.post('/', middlewares.validateCreateEmployee, controller.createEmployee);

routes.put('/:id', controller.updateEmployee);

routes.delete('/:id', controller.deleteEmployee);

module.exports = routes;
