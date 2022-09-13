'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    function generateMatches(){
      var set_matches=[]
      let fase=8
      let id=1
      for(let i= 1; i<= 4; i++){
        for(let j=1 ; j<= fase; j++){
          var grupo=Math.ceil(id/2)
          var next=fase+grupo
          set_matches.push({
            fase,
            next,
              tournamentId:1,
              match:id,
              createdAt:new Date(),
              updatedAt:new Date()})
              id++

        }
            fase=fase/2
          }
            return set_matches
        }
    const list_matches=generateMatches()
      queryInterface.bulkInsert('matches',list_matches);
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
