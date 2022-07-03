const errorHandler = require('./errorHandler');
const validateLogin = require('./validateLogin');
const validateCreateEmployee = require('./validateCreateEmployee');
const validateCreateProduct = require('./validateCreateProduct');
const validateToken = require('./validateToken');

module.exports = {
  errorHandler,
  validateLogin,
  validateCreateEmployee,
  validateCreateProduct,
  validateToken,
};
