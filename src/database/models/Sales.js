const sales = (sequelize, DataTypes) => {
  const tableSales = sequelize.define("Sales", 
    {
      employeeId: DataTypes.INTEGER,
      total: DataTypes.FLOAT,
      paymentId: DataTypes.INTEGER
    },
    { timestamps: false }
  );

  tableSales.associate = (models) => {
    tableSales.hasMany(models.SalesProducts, {
      foreignKey: 'saleId', as: 'saleProduct'
    });

    tableSales.belongsTo(models.PaymentType, {
      foreignKey: 'paymentId', as: 'payment'
    });
  };

  return tableSales;
};

module.exports = sales;