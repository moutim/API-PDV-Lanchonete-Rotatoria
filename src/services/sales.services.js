const {
  SalesProducts, Sales, Employees, PaymentTypes,
} = require('../database/models');

const getSales = async () => {
  const sales = await Sales.findAll({
    attributes: ['id', 'total'],
    include: [
      { model: Employees, as: 'employee', attributes: { exclude: 'password' } },
      { model: PaymentTypes, as: 'payment' },
      { model: SalesProducts, as: 'products', attributes: ['productId'] },
    ],
  });

  if (!sales) {
    throw new Error(JSON.stringify({ status: 404, message: 'Não existem vendas cadastradas no banco' }));
  }

  return sales;
};

module.exports = {
  getSales,
};
