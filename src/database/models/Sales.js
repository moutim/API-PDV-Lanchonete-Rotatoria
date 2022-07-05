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
      foreignKey: 'saleId', as: 'products'
    });

    tableSales.belongsTo(models.PaymentTypes, {
      foreignKey: 'paymentId', as: 'payment'
    });

    tableSales.belongsTo(models.Employees, {
      foreignKey: 'employeeId', as: 'employee'
    });
  };

  return tableSales;
};

module.exports = sales;