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

  static async penalties (req,res) {
    try{
      const penaltiesMatch = await Match_data_services.penalties(req.params.id)
      return res.status(201).send(penaltiesMatch)
    }catch(error){
      console.log(error);
    }
  }

  static async get_matches_data(req,res,next){z
    if(!req.params.tournamentId)return res.sendStatus(400)
    try{
      const matches_data= await Match_data_services.get_matches_data(req.params.tournamentId)
      if(!matches_data.length)return res.sendStatus(404)
      res.status(200).send(matches_data)
    }catch(e){
      console.log(e)
    }
  }

  static async get_matches_data_fase2(req,res,next){
    if(!req.params.tournamentId)return res.sendStatus(400)
    try{
      const matches_data= await Match_data_services.get_matches_data_fase2({tournamentId: req.params.tournamentId, fase: req.params.fase})
      if(!matches_data.length)return res.sendStatus(404)
      res.status(200).send(matches_data)
    }catch(e){
      console.log(e)
    }
  }

  static async get_matches_data_fase(req,res,next){
    if(!req.params.tournamentId)return res.sendStatus(400)
    try{
      const matches_data= await Match_data_services.get_matches_data_fase({tournamentId: req.params.tournamentId, fase: req.params.fase})
      if(!matches_data.length)return res.sendStatus(404)
      res.status(200).send(matches_data)
    }catch(e){
      console.log(e)
    }
  }

  static async get_matches_data_fase_id(req,res,next){
    if(!req.params.tournamentId)return res.sendStatus(400)
    try{
      const matches_data= await Match_data_services.get_matches_data_fase_id({tournamentId: req.params.tournamentId, fase: req.params.fase, matchId: req.params.matchId})
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
