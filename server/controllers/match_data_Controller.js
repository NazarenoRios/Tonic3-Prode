const Match_data_services = require("../services/match_data_services");

class Match_data_controller {
  static async set_matches_data(req, res, next) {
    try {
        const matches_data= await Match_data_services.set_matches_data(req.body)
        if(!matches_data)return res.sendStatus(400)
        else return res.sendStatus(204)
    } catch(e) {
      console.log(e)
    }
  }
  static async get_matches_data(req,res,next){
    if(!req.params.tournamentId)return res.sendStatus(400)
    try{
      const matches_data= await Match_data_services.get_matches_data(req.params.tournamentId)
      if(!matches_data.length)return res.sendStatus(404)
      res.status(200).send(matches_data)
    }catch(e){
      console.log(e)
    }
  }
  static async get_all_matches_data(req,res,next){
    try{
      const matches_data=await Match_data_services.get_all_matches_data()
      if(!matches_data.length)return res.sendStatus(404)
      res.status(200).send(matches_data)
    }
    catch(e){
      console.log(e)
    }
  }
}

module.exports = Match_data_controller;