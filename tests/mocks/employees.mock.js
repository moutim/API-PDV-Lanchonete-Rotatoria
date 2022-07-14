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

module.exports = {
  employees, employee, createdEmployee, updatedEmployee, deletedEmployee,
};
