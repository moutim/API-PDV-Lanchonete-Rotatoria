'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Sales', 'total', {
      allowNull: false,
      type: Sequelize.FLOAT
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Sales', 'total');
  }
};
