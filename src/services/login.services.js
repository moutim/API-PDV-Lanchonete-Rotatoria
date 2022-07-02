const { Employees } = require('../database/models');
const bcrypt = require('../utils/bcrypt');
const JWT = require('../utils/JWT');

const login = async ({ user, password }) => {
  const employee = await Employees.findOne({ where: { user } });

  if (!employee) {
    throw new Error(JSON.stringify({ status: 404, message: 'Usuario nao encontrado.' }));
  }

  if (!bcrypt.comparePassword(password, employee.dataValues.password)) {
    throw new Error(JSON.stringify({ status: 404, message: 'Senha incorreta.' }));
  }

  const token = JWT.generateToken(JSON.stringify({ user }));

  if (employee.dataValues.levelId === 1) {
    return { token, level: 'admin' };
  }

  return { token, level: 'worker' };
};

module.exports = {
  login,
};
