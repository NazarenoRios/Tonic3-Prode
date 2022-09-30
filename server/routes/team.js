const express = require("express")
const router = express.Router()
const TeamController = require("../controllers/team.controllers")


/** 
*  @swagger
*  components:
*  schemas:
*   Team:
*     type : object
*     properties:
*       name:
*         type: string
*         description : the team name
*       logo : 
*         type : string
*         description: the team logo
*       info:
*         type : text
*         description: description of the team
*       state:
*         type: boolean
*         description: state of the team
*     required:
*       - name
*       - logo
*       - info
*     example:
*       name: River Plate
*       logo: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/CA_river_plate_logo.svg/84px-CA_river_plate_logo.svg.png
*       info : El Club Atlético River Plate es una entidad polideportiva de Argentina.
*/



//ruta para crear un equipo
/**
 *  @swagger
*   /api/team/create:
*   post:
*     sumary: create a new team
*     tags: [Team]
*     requestBody:  
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Team'
*     responses:
*       200:
*         description: new Team created!
*/
router.post("/create",TeamController.createTeam)


//ruta para traer todos los equipos
/**
*  @swagger
*  /api/team/all:
*   get:
*     sumary: return all teams
*     tags: [Team]
*     responses:
*       200:
*         description: all teams!
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Team'
*/
router.get("/all",TeamController.getAllTeams)


//ruta para encontrar un equipo por id
/**
*  @swagger
*  /api/team/{id}:
*   get:
*     sumary: return a team
*     tags: [Team]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the team id
*     responses:
*       200:
*         description: team found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Team'
*       404: 
*         description: team not found
*/
router.get("/:id",TeamController.findByid)


//ruta para buscar un equipo
 /**
*  @swagger
*  /api/team/search/{name}:
*   get:
*     sumary: return a team by name
*     tags: [Team]
*     parameters:
*       - in: path
*         name: name
*         schema:
*          type: string
*         required: true
*         description: the team name
*     responses:
*       200:
*         description: team found!
*         content:
*           application/json:
*            schema:
*             type: object
*       404: 
*         description: team not found
*/
router.get("/search/:name",TeamController.findByName)
//ruta para modificar un equipo
/**
*  @swagger 
*  /api/team/modify/{id}:
*   put:
*     sumary: update a team
*     tags: [Team]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the team id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Tean'
*     responses:
*       200:
*         description: team updated!
*       404: 
*         description: team not found
*/
router.put("/modify/:id",TeamController.modifyTeam)


//ruta para eliminar un equipo
//ruta para eliminar un jugador
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
router.delete("/:id",TeamController.deleteTeam)

module.exports = router