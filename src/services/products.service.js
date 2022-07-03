const { Products } = require('../database/models');

const getProducts = async () => {
  const products = await Products.findAll();

  if (!products) {
    throw new Error(JSON.stringify({ status: 404, message: 'Não existe produtos cadastrados no banco.' }));
  }

  return products;
};

module.exports = {
  getProducts,
};
