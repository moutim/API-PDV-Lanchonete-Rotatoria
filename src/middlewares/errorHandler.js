/* eslint-disable no-unused-vars */
const errorHandler = (error, req, res, _next) => {
  try {
    const erro = JSON.parse(error.message);
    res.status(erro.status).json({ message: erro.message });
    return;
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = errorHandler;
