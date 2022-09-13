'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    function generateMatchesData(){
      var set_match_data=[]
      let teamId=1
      for(let i= 1; i<= 8; i++){
        for(let j= 1; j<= 2; j++){
          set_match_data.push({
            teamId,
            matchId:i,
            goals:0,
            createdAt:new Date(),
            updatedAt:new Date()})
            teamId++
          }
      }
      return set_match_data
    }
    const list_match_data=generateMatchesData()
      queryInterface.bulkInsert('data_matches',list_match_data);
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
