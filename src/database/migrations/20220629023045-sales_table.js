'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      employee_id: {
        allowNull: false,
        type:Sequelize.INTEGER,
        references: {
          model: 'Employees',
          id: 'id'
        },
        onDelete: 'CASCADE',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};
