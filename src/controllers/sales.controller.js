const service = require('../services/sales.services');

const getSales = async (req, res) => {
  const sales = await service.getSales();

  res.status(200).json(sales);
};

const getSale = async (req, res) => {
  const sale = await service.getSale(req.params.id);

  res.status(200).json(sale);
};

module.exports = {
  getSales,
  getSale,
};
