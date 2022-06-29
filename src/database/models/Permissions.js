const permissions = (sequelize, DataTypes) => {
  const tablePermissions = sequelize.define("Permissions", 
    {
      level: DataTypes.STRING
    },
    { timestamps: false }
  );

  tablePermissions.associate = (models) => {
    tablePermissions.hasOne(models.Users, {
      foreignKey: 'levelId', as: 'user'
    });
  };

  return tablePermissions;
};

module.exports = permissions;