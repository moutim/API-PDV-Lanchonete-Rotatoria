const bcrypt = require('../utils/bcrypt');
const { Employees } = require('../database/models');
const { getPermission } = require('./permissions.service');

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

const createEmployee = async ({ user, password, levelId }) => {
  await getPermission(levelId);

  const encrypt = bcrypt.encodePassword(password);

  const newEmployee = await Employees.create({ user, password: encrypt, levelId });
  delete newEmployee.dataValues.password;

  return newEmployee;
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
};
