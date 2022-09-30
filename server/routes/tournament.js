const express = require("express")
const TournamentController = require("../controllers/tournament.controllers")
const router = express.Router()


/** 
*  @swagger
*  components:
*  schemas:
*   Tournament:
*     type : object
*     properties:
*       name:
*         type: string
*         description : the team name
*       logo : 
*         type : string
*         description: the team logo
*       description:
*         type : text
*         description: description of the team
*       participants:
*         type: boolean
*         description: state of the team
*       phase:
*         type: array integer
*       state:
*         type: boolean
*     required:
*       - name
*       - logo
*       - description
*       - participants
*       - phase
*       - state
*     example:
*       name: Copa Argentina
*       logo: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/CA_river_plate_logo.svg/84px-CA_river_plate_logo.svg.png
*       description : Torneo argentino de primera division
*       participants: 16
*       phase: [8,4,2,1]
*       state: true
*/


//ruta para crear un torneo
/**
 *  @swagger
*   /api/tournament/create:
*   post:
*     sumary: create a new tournament
*     tags: [Tournament]
*     requestBody:  
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Tournament'
*     responses:
*       200:
*         description: new Tournament created!
*/
router.post("/create", TournamentController.createTournament)


//ruta para agregar equipos a un torneo
/**
 *  @swagger
*   /api/tournament/{idtournament}:
*   post:
*     sumary: create a new tournament
*     tags: [Tournament]
*     parameters:
*       - in: path
*         name: idtournament
*     requestBody:  
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Tournament'
*     responses:
*       200:
*         description: new Tournament created!
*/
router.post("/teams/:idtournament",TournamentController.addTeam)


//ruta para traer todos los torneos
/**
*  @swagger
*  /api/tournament/all:
*   get:
*     sumary: return all tournament
*     tags: [Tournament]
*     responses:
*       200:
*         description: all tournament!
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/tournament'
*/
router.get("/all",TournamentController.getAllTournament)


//ruta para encontrar un torneo por id
/**
*  @swagger
*  /api/tournamnt/{id}:
*   get:
*     sumary: return a tournament
*     tags: [Tournament]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the tournament id
*     responses:
*       200:
*         description: tournament found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Tournament'
*       404: 
*         description: tournament not found
*/
router.get("/:id",TournamentController.findByid)


//ruta para buscar un torneo
 /**
*  @swagger
*  /api/tournament/search/{name}:
*   get:
*     sumary: return a tournament by name
*     tags: [Tournament]
*     parameters:
*       - in: path
*         name: name
*         schema:
*          type: string
*         required: true
*         description: the tournament name
*     responses:
*       200:
*         description: tournament found!
*         content:
*           application/json:
*            schema:
*             type: object
*       404: 
*         description: tournament not found
*/ 
router.get("/search/:name",TournamentController.findByName)


//ruta para modificar un torneo
/**
*  @swagger 
*  /api/tournament/modify/{id}:
*   put:
*     sumary: update a tournament
*     tags: [Tournament]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the tournament id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Tournament'
*     responses:
*       200:
*         description: tournament updated!
*       404: 
*         description: tournament not found
*/
router.put("/modify/:id",TournamentController.modifyTournament)


//ruta para Terminar un torneo
/**
*  @swagger 
*  /api/tournament/end_tournament/{id}:
*   put:
*     sumary: end a tournament
*     tags: [Tournament]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the tournament id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Tournament'
*     responses:
*       200:
*         description: tournament updated!
*       404: 
*         description: tournament not found
*/
router.put("/end_tournament/:id",TournamentController.endTournament)


//ruta para eliminar un torneo
/**
*  @swagger
*  /api/team/{id}:
*   delete:
*     sumary: delete a team
*     tags: [Team]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the team id
*     responses:
*       200:
*         description: team deleted!
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/Team'
*       404: 
*         description: team not found
*/
router.delete("/:id",TournamentController.deleteTournament)

module.exports = router