const express = require("express");
const MatchControllers = require("../controllers/matchControllers");
const router = express.Router();
const { Match } = require("../models");
const Team = require("../models/Team");
const Tournament = require("../models/Tournament");



// GET : BUSCAR PARTIDOS DE UN TORNEO
router.get("/:tournamentId", MatchControllers.getMatches);

//CREA TODOS LOS PARTIDOS DE UN TORNEO
router.post("/create", MatchControllers.createMatchesController);

// SETEA LA DATA DE (1 A XX) PARTIDOS
router.post("/set", MatchControllers.setAllMatches);




//DEV TEST
router.post("/test", (req, res, next) => {
  Match.create(req.body).then((data) => res.status(200).send(data));
});
router.post("/team", (req, res) => {
  Team.create(req.body).then((data) => res.status(200).send(data));
});
router.post("/torneo", (req, res) => {
  Tournament.create(req.body).then((data) => res.status(200).send(data));
});
/////////////////////////////////////////

module.exports = router;
