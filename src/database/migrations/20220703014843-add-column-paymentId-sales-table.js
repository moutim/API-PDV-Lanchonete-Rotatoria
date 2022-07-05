'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Sales', 'paymentId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'PaymentType',
        id: 'id'
      },
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Sales', 'paymentId');
  }
};
