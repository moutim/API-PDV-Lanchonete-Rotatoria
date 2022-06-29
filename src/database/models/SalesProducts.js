const SalesProducts = (sequelize, DataTypes) => {
  const tableSalesProducts = sequelize.define("SalesProducts", {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, { timestamps: false });

  tableSalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      through: tableSalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'sale'
    });

    models.Products.belongsToMany(models.Sales, {
      through: tableSalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'product'
    });
  };

  return tableSalesProducts;
}

module.exports = SalesProducts;