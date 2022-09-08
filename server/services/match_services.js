const { ideahub } = require("googleapis/build/src/apis/ideahub");
const { Op } = require("sequelize");
const { Data_match } = require("../models");
const Match = require("../models/Match");

class Match_services {
  static async setMatchesData(matches) {
    if (!Array.isArray(matches)) return false;
    try {
       Data_match.bulkCreate(matches)
       .catch(e=>e)
    } 
    catch (e) {
      console.log(e);
      return false;
    }
  }
  static async getAllMatches(tournamentId) {
    return await Match.findAll({ where: { tournamentId } });
  }
  static async createMatches(matches) {
    return await Match.bulkCreate(matches);
  }
}

module.exports = Match_services;
