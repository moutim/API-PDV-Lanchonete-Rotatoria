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
    tableEmployees.hasOne(models.Users, {
      foreignKey: 'levelId', as: 'level'
    });
  };

  return tableEmployees;
};

module.exports = employees;