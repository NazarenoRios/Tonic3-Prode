const Match_data_services = require("../services/match_data_services");

class Match_data_controller {
  static async set_matches_data(req, res, next) {
    try {
        const matches_data= await Match_data_services.set_matches_data(req.body)
        if(!matches_data)return res.sendStatus(400)
        sendStatus(204)
    } catch {}
  }
}

module.exports = Match_data_controller;
