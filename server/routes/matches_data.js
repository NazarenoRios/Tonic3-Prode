const express = require("express");
const Match_data_controller = require("../controllers/match_data_Controller");
const {validate_admin} = require("../middleware/validate_admin");
const router = express.Router();

/**
*  @swagger
*  components:
*  schemas:
*   Data_match:
*     type : object
*     properties:
*       id:
*         type: integer
*         description : Data_match's id
*       goals : 
*         type : integer
*         description: Data_match's goals
*       penalties:
*         type : integer
*         description: description of the match
*     required:
*       -id: 
*       -goals: 
*       -penalties: 
*     example:
*       id: 1
*       goals: 1
*       penalties: 1
*/


//RUTA PARA AGREGAR EQUIPO/S  , SWIPEARLOS Y/O EDITAR EL SCORE
//EXAMPLES:
//AGREGAR/SWIPEAR EQUIPOS: [{id:1, teamId:3 },{id:2, teamId:4 }]
//EDITAR SCORE: [{id:1, goals:3 , penalties : 7}]
router.put('/add_team',validate_admin,Match_data_controller.set_matches_data)
/**
*  @swagger
*  /api/matches_data/add_team:
*   put:
*     sumary: add a team
*     tags: [Data_match]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Data_match'
*     responses:
*       201:
*         description: Data_match modified!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Data_match'
*       404: 
*         description: Data_match not found
*/

//ruta para agregar 1 penal a la vez 
router.put("/onepenaltie/:id",validate_admin,Match_data_controller.penalties)
/**
*  @swagger
*  /api/matches_data/onepenaltie/{id}:
*   put:
*     sumary: add a penaltie
*     tags: [Data_match]
*     parameters:
*       - in: path
*         name: id
*         schema:
*          type: string
*         required: true
*         description: add a penaltie one to one
*     responses:
*       201:
*         description: Data_match modified!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Data_match'
*       404: 
*         description: Data_match not found
*/

//RUTA PARA TRAER DATA_MATCH POR TORNEO
router.get ('/get_data/:tournamentId',Match_data_controller.get_matches_data)
/**
*  @swagger
*  /api/matches_data/get_data/{tournamentId}:
*   get:
*     sumary: get a Data_match by touranment id
*     tags: [Data_match]
*     parameters:
*       - in: path
*         name: touranemntId  
*         schema:
*          type: string
*         required: true
*         description: the Data_match by tournaments
*     responses:
*       200:
*         description: Data_match found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Data_match'
*       404: 
*         description: Data_match not found
*/


//RUTA PARA TRAER DATA_MATCH POR FASE
router.get ('/get_data/:tournamentId/:fase',Match_data_controller.get_matches_data_fase)
/**
*  @swagger
*  /api/matches_data/get_data/{tournamentId}/{fase}:
*   get:
*     sumary: get a Data_match by id
*     tags: [Data_match]
*     parameters:
*       - in: path
*         name: touranemntId  
*         schema:
*          type: string
*         required: true
*         description: the Data_match id
*       - in: path
*         name: fase  
*         schema:
*          type: string
*         required: true
*         description: the fase id
*     responses:
*       200:
*         description: Data_match found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Data_match'
*       404: 
*         description: Data_match not found
*/

//RUTA PARA TRAER DATA_MATCH POR FASE2
router.get ('/get_data2/:tournamentId/:fase',Match_data_controller.get_matches_data_fase2)
/**
*  @swagger
*  /api/matches_data/get_data2/{tournamentId}/{fase}:
*   get:
*     sumary: get a Data_match by id
*     tags: [Data_match]
*     parameters:
*       - in: path
*         name: touranemntId  
*         schema:
*          type: string
*         required: true
*         description: the Data_match id
*       - in: path
*         name: fase  
*         schema:
*          type: string
*         required: true
*         description: the fase id
*     responses:
*       200:
*         description: Data_match found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Data_match'
*       404: 
*         description: Data_match not found
*/


//RUTA PARA TRAER DATA_MATCH POR MATCH
router.get ('/get_data/:tournamentId/:fase/:matchId',Match_data_controller.get_matches_data_fase_id)

/**
*  @swagger
*  /api/matches_data/get_data/{tournamentId}/{fase}/{matchId}:
*   get:
*     sumary: get a Data_match by id
*     tags: [Data_match]
*     parameters:
*       - in: path
*         name: touranemntId  
*         schema:
*          type: string
*         required: true
*         description: the Data_match id
*       - in: path
*         name: fase  
*         schema:
*          type: string
*         required: true
*         description: the fase id
*       - in: path
*         name: matchId  
*         schema:
*          type: string
*         required: true
*         description: the fase id
*     responses:
*       200:
*         description: Data_match found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Data_match'
*       404: 
*         description: Data_match not found
*/

//RUTA PARA TRAER TODOS LOS DATA_MATCH
router.get('/get_all',Match_data_controller.get_all_matches_data)
/**
*  @swagger
*  /api/matches_data/all:
*   get:
*     sumary: return all Data_match
*     tags: [Data_match]
*     responses:
*       200:
*         description: all Data_match!
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Data_match'
*/

module.exports = router;