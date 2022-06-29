'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [
      {
        user: 'vitormoutim',
        password: '12345',
        levelId: 1
      },
      {
        user: 'hugomoutim',
        password: '12345',
        levelId: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
