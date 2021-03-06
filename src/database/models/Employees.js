const employees = (sequelize, DataTypes) => {
  const tableEmployees = sequelize.define("Employees", 
    {
      user: DataTypes.STRING,
      password: DataTypes.STRING,
      levelId: DataTypes.INTEGER
    },
    { timestamps: false }
  );

  tableEmployees.associate = (models) => {
    tableEmployees.belongsTo(models.Permissions, {
      foreignKey: 'levelId', as: 'level'
    });

    tableEmployees.hasOne(models.Sales, {
      foreignKey: 'employeeId', as: 'sales'
    });
  };

  return tableEmployees;
};

module.exports = employees;