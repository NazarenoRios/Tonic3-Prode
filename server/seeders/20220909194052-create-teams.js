'use strict';

const { QueryInterface } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('teams',[
      {
        name:"Boca",
        logo:"https://i.imgur.com/xmelf2h.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"River",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Chicago",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Cloud9",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Fnatic",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Estudiantes",
        logo:"https://i.imgur.com/7S5Nkuc.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Talleres",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Aldosivi",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Platense",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Racing",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"San Martin",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Chacarita",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Velez",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Patronato",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Independiente",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Colon",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Huracan",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Lanus",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Newells",
        logo:"https://imgur.com/a/x9hn0SV",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Comunicaciones",
        logo:"https://imgur.com/a/x9hn0SV",
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
