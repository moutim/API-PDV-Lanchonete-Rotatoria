const validateUser = (user) => {
  if (user.length < 4) {
    throw new Error(JSON.stringify(
      { status: 404, message: 'Usuario deve conter no minimo 3 caracteres' },
    ));
  }
};

const validatePassword = (password) => {
  if (password.length < 6) {
    throw new Error(JSON.stringify(
      { status: 404, message: 'Password deve conter no minimo 3 caracteres' },
    ));
  }
};

const validateLogin = (req, res, next) => {
  const { user, password } = req.body;

  if (!user || !password) {
    throw new Error(JSON.stringify({ status: 401, message: 'Preencha os campos obrigatorios.' }));
  }

  validateUser(user);
  validatePassword(password);

  next();
};

module.exports = validateLogin;
