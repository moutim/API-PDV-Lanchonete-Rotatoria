const bcrypt = require('bcrypt');
const { Employees } = require('../database/models');

const createEmployee = async ({ user, password }) => {
  console.log(password);
  const employees = await Employees.findAll();
  console.log(employees[0].dataValues.password);
  const teste = bcrypt.compareSync('password', employees[0].dataValues.password);
  console.log(teste);

  return employees;
};

module.exports = {
  createEmployee,
};
