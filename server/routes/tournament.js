const express = require("express")
const TournamentController = require("../controllers/tournament.controllers")
const { validate_admin } = require("../middleware/validate_admin")
const router = express.Router()

//ruta para crear un torneo
router.post("/create",validate_admin, TournamentController.createTournament)
//ruta para agregar equipos a un torneo
router.post("/teams/:idtournament",validate_admin,TournamentController.addTeam)
//ruta para traer todos los torneos
router.get("/all",TournamentController.getAllTournament)
//ruta para encontrar un torneo por id
router.get("/:id",TournamentController.findByid)
//ruta para buscar un torneo 
router.get("/search/:name",TournamentController.findByName)
//ruta para modificar un torneo
router.put("/modify/:id",validate_admin,TournamentController.modifyTournament)
//ruta para Terminar un torneo
router.put("/end_tournament/:id",validate_admin,TournamentController.endTournament)
//ruta para eliminar un torneo
router.delete("/:id",validate_admin,TournamentController.deleteTournament)

module.exports = router