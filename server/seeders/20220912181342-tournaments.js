'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('tournaments', [{
        name: 'copa_argentina',
        createdAt:new Date(),
              updatedAt:new Date()
      },
      {
        name:'uefa',
        createdAt:new Date(),
              updatedAt:new Date()
      },
    
    ]);
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
