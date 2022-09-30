const express = require("express");
const MatchControllers = require("../controllers/matchControllers");
const { validate_admin } = require("../middleware/validate_admin");
const router = express.Router();
const { Match } = require("../models");
const PointsServices = require("../services/points.services");


/**
*  @swagger
*  components:
*  schemas:
*   Match:
*     type : object
*     properties:
*       date:
*         type: date
*         description : match's time
*       winner : 
*         type : integer
*         description: match's winner
*       info:
*         type : text
*         description: description of the match
*       match_end:
*         type : bolean
*         description: match finished
*       fase:
*         type : integer
*         description: phase of the match
*       number_key:
*         type : integer
*         description: key's number
*       next:
*         type : integer
*         description: next
*     required:
*       -date: 
*       -winner: 
*       -info: 
*       -match_end: 
*       -fase: 
*       -numbre_key: 
*       -next: 
*     example:
*       date: 1
*       winner: 1
*       info: test
*       match_end: true
*       fase: 8
*       numbre_key: 2
*       next: 4
*/

// GET : BUSCAR PARTIDOS DE UN TORNEO
router.get("/:tournamentId", MatchControllers.getMatches);
/**
*  @swagger
*  /api/match/{tournamentId}:
*   get:
*     sumary: return a single match
*     tags: [Match]
*     parameters:
*       - in: path
*         name: tournamentId
*     responses:
*       200:
*         description: a Match!
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Match'
*/


// GET : BUSCAR PARTIDOS DE UN TORNEO POR FASES
router.get("/:tournamentId/:fase", MatchControllers.getMatches2);
/**
*  @swagger
*  /api/bet/userbet/{tournamentId}/{fase}:
*   get:
*     sumary: get an bet by id
*     tags: [Bet]
*     parameters:
*       - in: path
*         name: touranemntId  
*         schema:
*          type: string
*         required: true
*         description: the tournament id
*       - in: path
*         name: fase  
*         schema:
*          type: string
*         required: true
*         description: the fase id
*     responses:
*       200:
*         description: bet found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Match'
*       404: 
*         description: bet not found
*/

// SETEA 'winner','info','date' y 'match_end'
router.put("/set",validate_admin, MatchControllers.setAllMatches);
/**
*  @swagger
*  /api/match/set:
*   put:
*     sumary: set a match
*     tags: [Match]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Match'
*     responses:
*       201:
*         description: Match modified!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Match'
*       404: 
*         description: Match not found
*/

//RUTA PARA TERMINAR MATCH/ES
router.put('/end_match',validate_admin,MatchControllers.end_matches)
/**
*  @swagger
*  /api/match/end_match:
*   put:
*     sumary: end a match
*     tags: [Match]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Match'
*     responses:
*       201:
*         description: bet modified!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Bet'
*       404: 
*         description: bet not found
*/

//RUTA SOLO PARA TESTEAR
//ruta para editar un match
router.put("/edit/:id", validate_admin,async (req,res)=>{
const match = await Match.findByPk(req.params.id)
match.date = req.body.date
match.tournamentId = req.body.tournamentId
 match.winner = req.body.winner
  match.save()
  await PointsServices.addPoint(match)
  return res.status(201).send("listo")
})

module.exports = router;
