const bcrypt = require('../utils/bcrypt');
const { Employees, Permissions } = require('../database/models');
const { getPermission } = require('./permissions.service');

const getEmployees = async () => {
  const employees = await Employees.findAll(
    {
      include: { model: Permissions, as: 'level' },
      attributes: { exclude: ['password', 'levelId'] },
    },
  );

  if (!employees) {
    throw new Error(JSON.stringify({ status: 404, message: 'Não existem funcionarios cadastrados.' }));
  }

  return employees;
};

const getEmployee = async (id) => {
  const employee = await Employees.findOne(
    {
      where: { id },
      include: { model: Permissions, as: 'level' },
      attributes: { exclude: ['password', 'levelId'] },
    },
  );

  if (!employee) {
    throw new Error(JSON.stringify({ status: 404, message: 'Funcionário não encontrado.' }));
  }

  return employee;
};

const createEmployee = async ({ user, password, levelId }) => {
  await getPermission(levelId);

  const encrypt = bcrypt.encodePassword(password);

  try {
    const newEmployee = await Employees.create({ user, password: encrypt, levelId });
    delete newEmployee.dataValues.password;
    return newEmployee;
  } catch (e) {
    throw new Error(JSON.stringify({ status: 500, message: 'Ocorreu algum erro ao criar o funcionário.' }));
  }
};

const updateEmployee = async (id, body) => {
  const infos = body;
  await getEmployee(id);

  if (infos.password) {
    infos.password = bcrypt.encodePassword(infos.password);
  }

  if (infos.levelId) {
    await getPermission(infos.levelId);
  }

  const result = await Employees.update({ ...infos }, { where: { id } });

  if (!result[0]) {
    throw new Error(JSON.stringify({ status: 500, message: 'Ocorreu algum erro ao atualizar o funcionário.' }));
  }

  return { message: 'Informações atualizadas com sucesso.' };
};

const deleteEmployee = async (id) => {
  await getEmployee(id);

  const result = await Employees.destroy({ where: { id } });

  if (!result) {
    throw new Error(JSON.stringify({ status: 500, message: 'Ocorreu algum erro ao deletar o funcionário.' }));
  }

  return { message: 'Usuário deletado com sucesso.' };
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
