const express = require("express")
const BetController = require("../controllers/bet.controller")
const router = express.Router()

/**
*  @swagger
*  components:
*  schemas:
*   Bet:
*     type : object
*     properties:
*       winner_id:
*         type: integer
*         description : id of the winner
*       goals : 
*         type : integer
*         description: goals from the winner
*       cards:
*         type : integer
*         description: cards from the winner
*       faults:
*         type : integer
*         description: faults from the winner
*       possession:
*         type : integer
*         description: possession of the winner
*       player_goals:
*         type : integer
*         description: goals of winner Player
*       tournamentId:
*         type : integer
*         description: id from tournament
*     required:
*       -winner_id: 
*       -goals: 
*       -cards: 
*       -faults: 
*       -possession: 
*       -player_goals: 
*       -tournamentId: 
*     example:
*       winner_id: 1
*       goals: 4
*       cards: 3
*       faults: 4
*       possesion: 20%
*       player_goals: 2
*       tournamentId: 1
*/

//ruta para crear una apuesta
router.post("/create",BetController.createBet)
/**
 *  @swagger
*   /api/bet/create:
*   post:
*     sumary: create a new bet
*     tags: [Bet]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Bet'
*     responses:
*       200:
*         description: new Bet created!
*/

//ruta para traer todas las apuestas
router.get("/all",BetController.getAllBets)
/**
*  @swagger
*  /api/bet/all:
*   get:
*     sumary: return all bets
*     tags: [Bet]
*     responses:
*       200:
*         description: all bets!
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Bet'
*/

//ruta para traer una apuesta por id
router.get("/userbet/:user/:match",BetController.getBet)
/**
*  @swagger
*  /api/bet/userbet/{user}/{match}:
*   get:
*     sumary: get an bet by id
*     tags: [Bet]
*     parameters:
*       - in: path
*         name: user  
*         schema:
*          type: string
*         required: true
*         description: the bet id
*       - in: path
*         name: match  
*         schema:
*          type: string
*         required: true
*         description: the bet id
*     responses:
*       200:
*         description: bet found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Bet'
*       404: 
*         description: bet not found
*/

//ruta para modificar una apuesta
router.put("/modify/:id",BetController.modifyBet)
/**
*  @swagger
*  /api/bet/modify/{id}:
*   put:
*     sumary: modify a bet by id
*     tags: [Bet]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the bet id
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

//ruta para eliminar una apuesta
router.delete("/delete/:id",BetController.deleteBet)
/**
*  @swagger
*  /api/delete/{id}:
*   delete:
*     sumary: delete a bet by id
*     tags: [Bet]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the bet id
*     responses:
*       200:
*         description: bet deleted!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Bet'
*       404: 
*         description: bet not found
*/

module.exports = router