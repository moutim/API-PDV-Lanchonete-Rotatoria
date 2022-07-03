const service = require('../services/products.service');

const getProducts = async (req, res) => {
  const products = await service.getProducts();

  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const product = await service.getProduct(req.params.id);

  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getProduct,
};
