const getProducts = async (req, res) => {
  const products = await service.getProducts();

  res.status(200).json(products);
};

module.exports = {
  getProducts,
};
