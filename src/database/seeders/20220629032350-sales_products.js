'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SalesProducts', [
      {
        saleId: 1,
        productId: 1,
        quantity: 2
      },
      {
        saleId: 1,
        productId: 2,
        quantity: 1
      },
      {
        saleId: 2,
        productId: 1,
        quantity: 1
      },
      {
        saleId: 2,
        productId: 2,
        quantity: 2
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SalesProducts', null, {});
  }
};
