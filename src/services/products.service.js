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

const createProduct = async ({ name }) => {
  try {
    const product = await Products.create({ name });
    return product;
  } catch (e) {
    throw new Error(JSON.stringify({ status: 500, message: e.message }));
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
