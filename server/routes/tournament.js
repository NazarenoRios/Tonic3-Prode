const express = require("express")
const TournamentController = require("../controllers/tournament.controllers")
const router = express.Router()

//ruta para crear un torneo
router.post("/create", TournamentController.createTournament)
//ruta para agregar equipos a un torneo
router.post("/teams/:idtournament",TournamentController.addTeam)
//ruta para traer todos los torneos
router.get("/all",TournamentController.getAllTournament)
//ruta para encontrar un torneo por id
router.get("/:id",TournamentController.findByid)
//ruta para buscar un torneo 
router.get("/search/:name",TournamentController.findByName)
//ruta para modificar un torneo
router.put("/modify/:id",TournamentController.modifyTournament)
//ruta para Terminar un torneo
router.put("/end_tournament/:id",TournamentController.endTournament)
//ruta para eliminar un torneo
router.delete("/:id",TournamentController.deleteTournament)

module.exports = router