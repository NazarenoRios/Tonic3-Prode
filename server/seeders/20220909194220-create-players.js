'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    function generatePlayers(){
      var set_players=[]
      for(let i= 1; i<= 20; i++){
        for(let j= 1; j<= 14; j++){
          set_players.push({
            teamId:i,
            age:i+j,
            fullname:`messi_${i}--${j}`
            ,goals:j,
          createdAt:new Date(),
          updatedAt:new Date()})
        }
      }
      return set_players
    }
    const list_players=generatePlayers()
      queryInterface.bulkInsert('players',list_players);

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
