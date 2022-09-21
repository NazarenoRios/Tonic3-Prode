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

  
  static async getMatch(id) {
    try {
      return await Match.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  }

  static async end_matches(matches) {

    for (let i = 0; i < matches.length; i++) {
      const { number_key, tournamentId } = matches[i];

      if (!number_key || typeof number_key !== "number") continue;
      let match = await Data_match.findAll({
        where: { matchId: matches[i].id },
        include: { model: Match, where: { id: matches[i].id } },
      });
      const { next } = match[0].match;

      if (!match) continue;
      const test = await Data_match.findAll({ where: { matchId: next } });
      const index = !test[0].teamId ? 0 : 1;
      const ix = match[0].goals > match[1].goals ? 0 : 1;

      try {

        await Match.update(
          { winner: match[ix].teamId, match_end: true },
          { where: { [Op.and]: [{ number_key }, { tournamentId }] } }
        ).catch((e) => console.log(e));
       await Data_match.update(
          { teamId: match[ix].teamId },
          { where: { id: test[index].id } }
        ).catch((e) => console.log(e));
        return true

      } catch (e) {
        console.log(e);
      }
    }
  }
}

module.exports = Match_services;
