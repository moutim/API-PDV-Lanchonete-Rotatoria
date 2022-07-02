const { Employees } = require('../database/models');

const validateUser = async (user) => {
  const employee = await Employees.findOne({ where: { user } });
  if (employee) {
    throw new Error(JSON.stringify({ status: 401, message: 'Usuário já cadastrado. Escolha outro.' }));
  }

  if (user.length < 5) {
    throw new Error(JSON.stringify({ status: 401, message: 'O usuário deve ter no mínimo 5 caracteres.' }));
  }
};

const validatePassword = (password) => {
  if (password < 5) {
    throw new Error(JSON.stringify({ status: 401, message: 'A senha deve ter no mínimo 5 caracteres.' }));
  }
};

const validateCreateEmployee = async (req, res, next) => {
  const { user, password, levelId } = req.body;

  if (!user || !password || !levelId) {
    throw new Error(JSON.stringify({ status: 401, message: 'Preencha os campos usuário, senha e level.' }));
  }

  await validateUser(user);
  validatePassword(password);

  next();
};

module.exports = validateCreateEmployee;
