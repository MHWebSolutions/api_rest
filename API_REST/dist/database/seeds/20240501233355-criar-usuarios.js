"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'BagayayaBr',
        email: 'MarcosHenrique2901@outlook.com',
        password_hash: await bcryptjs.hash('Mh290104', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'BruhPr',
        email: 'MarcosHenrique2901v2@outlook.com',
        password_hash: await bcryptjs.hash('Mh290104', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Leone',
        email: 'MarcosHenrique2901v3@outlook.com',
        password_hash: await bcryptjs.hash('Mh290104', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down() {},
};
