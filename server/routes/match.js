const express = require("express");
const MatchControllers = require("../controllers/matchControllers");
const router = express.Router();
const { Match } = require("../models");
const Team = require("../models/Team");
const Tournament = require("../models/Tournament");



// GET : BUSCAR PARTIDOS DE UN TORNEO
router.get("/:tournamentId", MatchControllers.getMatches);

// SETEA 'winner','info','date' y 'match_end'
router.put("/set", MatchControllers.setAllMatches);

//RUTA PARA TERMINAR MATCH/ES
router.put('/end_match',MatchControllers.end_matches)

module.exports = router;
