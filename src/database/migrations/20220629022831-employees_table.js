'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      levelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Permissions',
          id: 'id'
        },
        onDelete: 'CASCADE',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Employees');
  }
};
