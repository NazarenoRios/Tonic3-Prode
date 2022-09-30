const express = require("express")
const PlayerController = require("../controllers/player.controller")
const { validate_admin } = require("../middleware/validate_admin")
const router = express.Router()

/** 
*  @swagger
*  components:
*  schemas:
*   Player:
*     type : object
*     properties:
*       fullname:
*         type: string
*         description : the player name
*       img: 
*         type : string
*         description: the player image
*       goals:
*         type: integer
*         description: the goals of the player 
*       info:
*         type : text
*         description: description of the player
*       titular: 
*         type: boolean
*         description: indicates ownership of the player
*     required:
*       - fullname
*       - img
*       - goals
*       - info
*       - titular
*     example:
*       name: Lionel Messi
*       img: https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-waves-to-the-crowd-prior-to-the-joan-picture-id1166074663?s=612x612
*       goals: 3
*       info : conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista ...
*       titular: true
*/



//ruta para crear un jugador
/**
 *  @swagger
*   /api/player/create:
*   post:
*     sumary: create a new player
*     tags: [Player]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Player'
*     responses:
*       200:
*         description: new player created!
*/
router.post("/create",validate_admin,PlayerController.createPlayer)

//ruta para traer todos los jugadores
/**
*  @swagger
*  /api/player/all:
*   get:
*     sumary: return all players
*     tags: [Player]
*     responses:
*       200:
*         description: all players!
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Player'
*/
router.get("/all",PlayerController.getAllPlayers)


//ruta para encontrar un jugador por id
/**
*  @swagger
*  /api/player/{id}:
*   get:
*     sumary: return a player
*     tags: [Player]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: the player id
*     responses:
*       200:
*         description: player found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Player'
*       404: 
*         description: player not found
*/
router.get("/:id",PlayerController.findByid)


//ruta para buscar un jugador
/**
*  @swagger
*  /api/player/search/{name}:
*   get:
*     sumary: return a player by name
*     tags: [Player]
*     parameters:
*       - in: path
*         name: name
*         schema:
*          type: string
*         required: true
*         description: the player name
*     responses:
*       200:
*         description: player found!
*         content:
*           application/json:
*            schema:
*             type: object
*       404: 
*         description: player not found
*/
router.get("/search/:name",PlayerController.findByName)


//ruta para modificar un jugador
/**
*  @swagger 
*  /api/player/modify/{id}:
*   put:
*     sumary: update a player
*     tags: [Player]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the player id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Player'
*     responses:
*       200:
*         description: player updated!
*       404: 
*         description: player not found
*/
router.put("/modify/:id",validate_admin,PlayerController.modifyPlayer)


//ruta para asignar un jugador a un equipo
/**
* @swagger
*  /api/player/team/{id}:
*   put:
*     sumary: asingn team a player
*     tags: [Player]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the player id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Player'
*     responses:
*       200:
*         description: the player is add to team!
*         content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/Player'
*       404: 
*         description: player not found
*/
router.put("/team/:id",validate_admin,PlayerController.asignTeam)


//ruta para hacer titular a un Jugador
/**
*  @swagger
*  /api/player/titular/{id}:
*   put:
*     sumary: make titular a player
*     tags: [Player]
*     parameters:
*         - in: path 
*           name: id
*           schema:
*             type: string
*           required: true
*           description: the player id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Player'
*     responses:
*       200:
*         description: the player is titular now!
*         content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/Player'
*       404: 
*         description: player not found
*/
router.put("/titular/:id",validate_admin,PlayerController.playerTitular)

//ruta para eliminar un jugador
/**
*  @swagger
*  /api/player/{id}:
*   delete:
*     sumary: delete a player
*     tags: [Player]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the player id
*     responses:
*       200:
*         description: player deleted!
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/Player'
*       404: 
*         description: player not found
router.delete("/:id",validate_admin,PlayerController.deletePlayer)

module.exports = router