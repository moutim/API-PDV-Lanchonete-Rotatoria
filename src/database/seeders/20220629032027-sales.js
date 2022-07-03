'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sales', [
      {
        employeeId: 1,
        total: 14.99,
        paymentId: 1,
      },
      {
        employeeId: 2,
        total: 19.99,
        paymentId: 2,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
