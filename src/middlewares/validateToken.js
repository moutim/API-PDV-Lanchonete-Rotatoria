const { authenticateToken } = require('../utils/JWT');

const validateToken = async (req, res, next) => {
  const { authorization: token } = req.headers;

  authenticateToken(token);

  next();
};

module.exports = validateToken;
