const service = require('../services/products.service');

const getProducts = async (req, res) => {
  const products = await service.getProducts();

  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const product = await service.getProduct(req.params.id);

  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const result = await service.createProduct(req.body);

  res.status(200).json(result);
};

const updateProduct = async (req, res) => {
  const result = await service.updateProduct(req.params.id, req.body);

  res.status(200).json(result);
};

const deleteProduct = async (req, res) => {
  const result = await service.deleteProduct(req.params.id);

  res.status(200).json(result);
};

const getProductByName = async (req, res) => {
  const { name } = req.query;

  const product = await service.getProductByName(name);

  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
};
