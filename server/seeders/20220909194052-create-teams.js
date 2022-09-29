'use strict';

const { QueryInterface } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('teams',[
      {
        name:"Banfield",
        logo:"https://i.imgur.com/gwbrjMY.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Belgrano",
        logo:"https://i.imgur.com/iPsgNmk.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Boca",
        logo:"https://i.imgur.com/xmelf2h.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Defensa y Justicia",
        logo:"https://i.imgur.com/LB4NpPu.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Deportivo Madryn",
        logo:"https://i.imgur.com/IRHz4OA.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Estudiantes de La Plata",
        logo:"https://i.imgur.com/7S5Nkuc.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Gimnasia de La Plata",
        logo:"https://i.imgur.com/IlTaAgI.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Godoy Cruz",
        logo:"https://i.imgur.com/pEq15wT.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Independiente",
        logo:"https://i.imgur.com/MKHM0tl.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Newell's Old Boys",
        logo:"https://i.imgur.com/rykAWMa.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Patronato",
        logo:"https://i.imgur.com/F2MkcgH.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Quilmes",
        logo:"https://i.imgur.com/wWyd5bJ.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Racing",
        logo:"https://i.imgur.com/iOX4WN0.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"River",
        logo:"https://i.imgur.com/0NygieF.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Rosario Central",
        logo:"https://i.imgur.com/0qOltim.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"Velez",
        logo:"https://i.imgur.com/2qkokwA.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:"San Lorenzo",
        logo:"https://i.imgur.com/AEYdFqY.png",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      
  ])
  },

  async down (queryInterface, Sequelize) {

  }
};
