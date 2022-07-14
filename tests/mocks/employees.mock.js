const employees = [
  {
    id: 1,
    user: 'vitormoutim',
    level: {
      id: 1,
      level: 'admin',
    },
  },
  {
    id: 2,
    user: 'hugomoutim',
    level: {
      id: 2,
      level: 'worker',
    },
  },
];

const employee = {
  id: 1,
  user: 'vitormoutim',
  level: {
    id: 1,
    level: 'admin',
  },
};

const createdEmployee = {
  id: 3,
  user: 'teste',
  levelId: 1,
};

const updatedEmployee = { message: 'Informações atualizadas com sucesso.' };

const deletedEmployee = { message: 'Usuário deletado com sucesso.' };

const employeesNotFound = { status: 404, message: 'Não existem funcionarios cadastrados.' };

const employeeNotFound = { status: 404, message: 'Funcionário não encontrado.' };

const inputEmployee = { user: 'novoUsuario', password: 'novaSenha', levelId: 1 };

const createEmployee = { dataValues: { ...createdEmployee } };

const employeeNotCreated = { status: 500, message: 'Ocorreu algum erro ao criar o funcionário.' };

const employeeNotUpdated = { status: 500, message: 'Ocorreu algum erro ao atualizar o funcionário.' };

const employeeNotDeleted = { status: 500, message: 'Ocorreu algum erro ao deletar o funcionário.' };

module.exports = {
  employees,
  employee,
  createdEmployee,
  updatedEmployee,
  deletedEmployee,
  employeesNotFound,
  employeeNotFound,
  inputEmployee,
  createEmployee,
  employeeNotCreated,
  employeeNotUpdated,
  employeeNotDeleted,
};
