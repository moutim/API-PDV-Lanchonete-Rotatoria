'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Sales',
          id: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          id: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('SalesProducts');
  }
};
