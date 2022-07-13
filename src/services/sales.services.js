const {
  SalesProducts, Sales, Employees, PaymentTypes, Products,
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

const getSale = async (id) => {
  const sale = await Sales.findAll({
    where: { id },
    attributes: ['id', 'total'],
    include: [
      { model: Employees, as: 'employee', attributes: { exclude: 'password' } },
      { model: PaymentTypes, as: 'payment' },
      {
        model: SalesProducts,
        as: 'products',
        attributes: ['productId'],
        required: true,
        include: { model: Products, as: 'product', required: true },
      },
    ],
  });

  if (!sale) {
    throw new Error(JSON.stringify({ status: 404, message: 'Não existem vendas cadastradas no banco' }));
  }

  return sale;
};

module.exports = {
  getSales,
  getSale,
};
