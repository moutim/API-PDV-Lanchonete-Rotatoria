const paymentType = (sequelize, DataTypes) => {
  const tablePaymentType = sequelize.define("PaymentTypes", 
    {
      type: DataTypes.STRING
    },
    { timestamps: false }
  );

  tablePaymentType.associate = (models) => {
    tablePaymentType.hasOne(models.Sales, {
      foreignKey: 'paymentId', as: 'sale'
    });
  };

  return tablePaymentType;
};

module.exports = paymentType;