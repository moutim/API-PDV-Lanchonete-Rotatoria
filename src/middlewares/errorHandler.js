const errorHandler = (error, req, res, _next) => {
  try {
    const erro = JSON.parse(error.message);
    return res.status(erro.status).json({ message: erro.message });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = errorHandler;
