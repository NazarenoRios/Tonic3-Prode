const express = require("express");
const Match_data_controller = require("../controllers/match_data_Controller");
const router = express.Router();

//RUTA PARA AGREGAR EQUIPO/S  , SWIPEARLOS Y/O EDITAR EL SCORE
//EXAMPLES:
//AGREGAR/SWIPEAR EQUIPOS: [{id:1, teamId:3 },{id:2, teamId:4 }]
//EDITAR SCORE: [{id:1, goals:3 }]
router.put('/add_team',Match_data_controller.set_matches_data)


//RUTA PARA TRAER DATA_MATCH POR TORNEO
router.get ('/get_data/:tournamentId',Match_data_controller.get_matches_data)


//RUTA PARA TRAER TODOS LOS DATA_MATCH
router.get('/get_all',Match_data_controller.get_all_matches_data)
module.exports = router;