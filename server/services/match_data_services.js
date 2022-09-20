const { Op, where } = require("sequelize");
const { Data_match, Match, Team } = require("../models");

class Match_data_services {
  static async set_matches_data(matches_data) {
    let test;
    if (!Array.isArray(matches_data)) return false;
    console.log(matches_data);
    try {
      for (let i = 0; i < matches_data.length; i++) {
        test = await Data_match.update(matches_data[i], {
          where: { id: matches_data[i].id },
        });
      }
      if (!test[0]) return false;
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }


  static async get_matches_data(tournamentId) {
    try {
        if(tournamentId)
      return await Match.findAll({where:{tournamentId:tournamentId},
        include:{
          model:Team,
          as:'teamID'
        }
        })
        console.log(a)
        if(a)return a
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  static async get_matches_data_fase2({tournamentId, fase}) {
    try {
        if(tournamentId)
        return await Match.findAll({where:{tournamentId:tournamentId, fase: fase},
          include:{
            model:Team,
            as:'teamID'
          }
          })
          console.log(a)
          if(a)return a
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  static get_matches_data_fase({tournamentId, fase}) {
    try {
        if(tournamentId)
      return Data_match.findAll({ include:{
        model:Match,
        where:{tournamentId, fase}
      } })
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  static get_matches_data_fase_id({tournamentId, fase, matchId}) {
    try {
        if(tournamentId)
      return Data_match.findAll({ include:{
        model:Match,
        where:{tournamentId, fase, matchId: matchId}
      } })
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  static get_all_matches_data(){
    return Data_match.findAll()
  }
}

module.exports = Match_data_services;
