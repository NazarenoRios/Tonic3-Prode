const PointsServices = require("../services/points.services");

class PointsControllers {
  static async getAllPointsInTournament(req, res) {
    try {
      const tournaments = await PointsServices.getAllPointsInTournament(
        req.params.id
      );
      return res.status(201).send(tournaments);
    } catch (error) {
      console.log(error);
    }
  }

  static async getTournamentPoints(req, res) {
    try {
      const points = await PointsServices.getTournamentPoints(
        req.params.id,
        req.body.tournamentId
      );
      console.log("esto es points", points);
      return await res.send(points);
    } catch (error) {
      console.log(error);
    }
  }

  static async getFasePoints(req ,res){
    try{
      const fasePoints = await PointsServices.getFasePoints(req.params.id, req.params.tournamentId)
      return res.status(201).send(fasePoints)
    }catch(error){
      console.log(error);
    }
  }

  static async deleteTablePoints(req, res) {
    try {
      const deleted = await PointsServices.deleteATablePoint(req.params.userId);
      return await res.sendStatus(204);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PointsControllers;