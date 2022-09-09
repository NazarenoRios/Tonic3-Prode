'use strict';

const { QueryInterface } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('teams',[
      {
        name:"Boca",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"River",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Chicago",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Cloud9",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Fnatic",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Estudiantes",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Talleres",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Aldosivi",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Platense",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Racing",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"San Martin",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Chacarita",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Velez",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Patronato",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Independiente",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Colon",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Huracan",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Lanus",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Newells",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Comunicaciones",
        createdAt:new Date(),
        updatedAt:new Date()
      },
  ])
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
