const sales = (sequelize, DataTypes) => {
  const tableSales = sequelize.define("Sales", 
    {
      employeeId: DataTypes.INTEGER
    },
    { timestamps: false }
  );

  tableSales.associate = (models) => {
    tableSales.hasMany(models.SalesProducts, {
      foreignKey: 'saleId', as: 'sale'
    });
  };

  return tableSales;
};

module.exports = sales;