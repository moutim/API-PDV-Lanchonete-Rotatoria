const service = require('../services/sales.services');

const getSales = async (req, res) => {
  const sales = await service.getSales();

  res.status(200).json(sales);
};

module.exports = {
  getSales,
};
