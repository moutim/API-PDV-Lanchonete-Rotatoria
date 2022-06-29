const bcrypt = require('bcrypt');

const saltRounds = bcrypt.genSaltSync(10);

const encodePassword = (password) => {
  const hash = bcrypt.hashSync(password, saltRounds);

  return hash;
};

const comparePassword = (inputPassword, dbPassword) => {
  const result = bcrypt.compareSync(inputPassword, dbPassword);

  return result;
}

module.exports = {
  encodePassword,
  comparePassword
};