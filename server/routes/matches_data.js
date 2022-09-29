const express = require("express");
const Match_data_controller = require("../controllers/match_data_Controller");
const {validate_admin} = require("../middleware/validate_admin");
const router = express.Router();

//RUTA PARA AGREGAR EQUIPO/S  , SWIPEARLOS Y/O EDITAR EL SCORE
//EXAMPLES:
//AGREGAR/SWIPEAR EQUIPOS: [{id:1, teamId:3 },{id:2, teamId:4 }]
//EDITAR SCORE: [{id:1, goals:3 , penalties : 7}]
router.put('/add_team',validate_admin,Match_data_controller.set_matches_data)

//ruta para agregar 1 penal a la vez 
router.put("/onepenaltie/:id",validate_admin,Match_data_controller.penalties)

//RUTA PARA TRAER DATA_MATCH POR TORNEO
router.get ('/get_data/:tournamentId',Match_data_controller.get_matches_data)

//RUTA PARA TRAER DATA_MATCH POR FASE
router.get ('/get_data/:tournamentId/:fase',Match_data_controller.get_matches_data_fase)

//RUTA PARA TRAER DATA_MATCH POR FASE2
router.get ('/get_data2/:tournamentId/:fase',Match_data_controller.get_matches_data_fase2)

//RUTA PARA TRAER DATA_MATCH POR MATCH
router.get ('/get_data/:tournamentId/:fase/:matchId',Match_data_controller.get_matches_data_fase_id)


//RUTA PARA TRAER TODOS LOS DATA_MATCH
router.get('/get_all',Match_data_controller.get_all_matches_data)
module.exports = router;