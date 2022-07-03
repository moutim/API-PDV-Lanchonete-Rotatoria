const { Products } = require('../database/models');

const getProducts = async () => {
  const products = await Products.findAll();

  if (!products) {
    throw new Error(JSON.stringify({ status: 404, message: 'Não existe produtos cadastrados no banco.' }));
  }

  return products;
};

const getProduct = async (id) => {
  const product = await Products.findOne({ where: { id } });

  if (!product) {
    throw new Error(JSON.stringify({ status: 404, message: 'Produto não encontrado' }));
  }

  return product;
};

module.exports = {
  getProducts,
  getProduct,
};
