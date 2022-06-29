const products = (sequelize, DataTypes) => {
  const tableProducts = sequelize.define("Products", 
    {
      name: DataTypes.STRING
    },
    { timestamps: false }
  );

  tableProducts.associate = (models) => {
    tableProducts.hasMany(models.SalesProducts, {
      foreignKey: 'productId', as: 'product'
    });
  };

  return tableProducts;
};

module.exports = products;