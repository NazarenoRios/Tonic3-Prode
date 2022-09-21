const express = require("express");
const MatchControllers = require("../controllers/matchControllers");
const router = express.Router();
const { Match } = require("../models");
const PointsServices = require("../services/points.services");



// GET : BUSCAR PARTIDOS DE UN TORNEO
router.get("/:tournamentId", MatchControllers.getMatches);

// SETEA 'winner','info','date' y 'match_end'
router.put("/set", MatchControllers.setAllMatches);

//RUTA PARA TERMINAR MATCH/ES
router.put('/end_match',MatchControllers.end_matches)

//ruta para editar un match
router.put("/edit/:id", async (req,res)=>{
const match = await Match.findByPk(req.params.id)
match.date = req.body.date
match.tournamentId = req.body.tournamentId
 match.winner = req.body.winner
  match.save()
  await PointsServices.addPoint(match)
  return res.status(201).send("listo")
})

module.exports = router;
