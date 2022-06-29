'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [
      {
        user: 'vitormoutim',
        password: '$2b$10$9cKqGXT07m6kcunbQVn4bOtNrynjkM8.75c6LflwDXn8FZojWAesK',
        levelId: 1
      },
      {
        user: 'hugomoutim',
        password: '$2b$10$xUIzvExPUX/5Cyfrgv6M0ufR5Eg99hmTfr8qxrvWL1v9tG0BuHwt6',
        levelId: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
