'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PaymentTypes', [
      {
        type: 'debit',
      },
      {
        type: 'credit',
      },
      {
        type: 'money',
      },
      {
        type: 'pix',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PaymentTypes', null, {});
  }
};
