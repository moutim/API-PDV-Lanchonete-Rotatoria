const { Products } = require('../database/models');

const validateName = async (name) => {
  const product = await Products.findOne({ where: { name } });

  if (product) {
    throw new Error(JSON.stringify({ status: 401, message: 'Produto já cadastrado.' }));
  }

  if (name.length < 5) {
    throw new Error(JSON.stringify({ status: 401, message: 'O nome do produto deve conter no mínimo 5 caracteres.' }));
  }
};

const validateCreateProduct = async (req, res, next) => {
  const { name } = req.body;

  await validateName(name);

  next();
};

module.exports = validateCreateProduct;
