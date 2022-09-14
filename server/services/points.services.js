const { Points } = require("../models");

class PointsServices {

    static async getTournamentPoints (user,tournament){
        try{
          return await Points.findOne({
                where:{
                    userId: user,
                    tournamentId : tournament
                }
            })
        }catch(error){
            console.log(error);
        }
    }

}

module.exports = PointsServices