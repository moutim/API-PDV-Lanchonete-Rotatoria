const bcrypt = require('bcrypt');
const { Employees } = require('../database/models');

const createEmployee = async ({ user, password }) => {
  const employees = await Employees.findAll();
  const teste = bcrypt.compareSync('password', employees[0].dataValues.password);

  return { user, password, employees };
};

const getEmployees = async () => {
  const employees = await Employees.findAll();

  if (!employees) {
    throw new Error(JSON.stringify({ status: 404, message: 'Não existem funcionarios cadastrados.' }));
  }

  return employees;
};

const getEmployee = async (id) => {
  const employee = await Employees.findOne({ where: { id } });

  if (!employee) {
    throw new Error(JSON.stringify({ status: 404, message: 'Funcionário não encontrado.' }));
  }

  return employee;
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
};
