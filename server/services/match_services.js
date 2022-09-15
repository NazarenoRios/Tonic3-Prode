const { firebase } = require("googleapis/build/src/apis/firebase");
const { Op, where } = require("sequelize");
const { Data_match } = require("../models");
const Match = require("../models/Match");
class Match_services {
  static async setMatchesData(matches) {
    if (!Array.isArray(matches)) return false;
    try {
      return Match.bulkCreate(matches, {
        updateOnDuplicate: ["winner", "info", "date", "match_end"],
      });
    } catch (e) {
      console.log(e);
    }
  }
  static async getAllMatches(tournamentId) {
    return await Match.findAll({ where: { tournamentId } });
  }
  static async end_matches(matches){
    for (let i = 0; i < matches.length; i++) {
      const {id}=matches[i]
      if (!id || typeof id !== 'number')continue
        let match = await Data_match.findAll({
          where: { matchId: matches[i].id },
          include:{model:Match,where:{id:matches[i].id},attributes:['next']}
        });
        const {next}=match[0].match
        if (!match)continue
        const test =await Data_match.findAll({where:{matchId:next}})
        const index=!test[0].teamId?0:1
        try{
          if(match[0].goals > match[1].goals){
            Match.update(
              { winner: match[0].teamId, match_end:true },
            { where: { id } }
          )
               Data_match.update({teamId:match[0].teamId},
                {where:{ id:test[index].id }}
                );
       
              }
              else {
                console.log(next)
                Match.update(
                  { winner: match[1].teamId, match_end:true },
                  { where: { id } }
                  );
                  Data_match.update({teamId:match[1].teamId},
                    {where:{ id:test[index].id }}
                    );
                  }
                }
              
        catch(e){
          console.log(e)
        }
    }
  }
}

module.exports = Match_services;
