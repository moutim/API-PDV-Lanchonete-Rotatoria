const errorHandler = require('./errorHandler');
const validateLogin = require('./validateLogin');
const validateCreateEmployee = require('./validateCreateEmployee');
const validateCreateProduct = require('./validateCreateProduct');

module.exports = {
  errorHandler,
  validateLogin,
  validateCreateEmployee,
  validateCreateProduct,
};
