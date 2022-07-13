const service = require('../services/login.services');

const login = async (req, res) => {
  console.log(req.body);
  const token = await service.login(req.body);

  return res.status(200).json(token);
};

module.exports = {
  login,
};
