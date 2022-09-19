const { Op } = require("sequelize");
const Points = require("../models/Points")
const Tournament = require("../models/Tournament")
const User = require("../models/User")

class PointsServices {

    static async getTournamentPoints (user,tournament){
        try{
            console.log("#********************",user,tournament);
          return await Points.findOne({
            where : { 
                userId: user ,
                tournamentId: tournament 
            }
            })
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = PointsServices