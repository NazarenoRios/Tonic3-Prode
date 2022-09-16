const { firebase } = require("googleapis/build/src/apis/firebase");
const { Op } = require("sequelize");
const { Data_match } = require("../models");
const Match = require("../models/Match");
class Match_services {
  static async setMatchesData(matches) {
    if (!Array.isArray(matches)) return false;
    try {
      /*
      for(let i= 0; i< matches.length; i++){
        if(matches[i].match_end){
          let match= await Data_match.findAll({where:{matchId:matches[i].id}
          })
          if(match){
          console.log(match[0].id,match[1].id)
          if(match[0].goals>match[1].goals)Match.update({winner:match[0].teamId},{where:{id:match[0].matchId}}).then(data=>console.log(data))
          else Match.update({winner:match[1].teamId},{where:{id:match[1].matchId}})
        }
        }
      }
      */
       return Match.bulkCreate(matches,{updateOnDuplicate:['winner','info','date','match_end']})
    }
    catch (e) {
      console.log(e);
    }
  }
  static async getAllMatches(tournamentId) {
    return await Match.findAll({ where: { tournamentId } });
  }
}

module.exports = Match_services;
