const express = require("express")
const PointsControllers = require("../controllers/points.controller")
const router = express.Router()

//ruta para obtener todos los puntos de todos los usuarios en un torneo
router.get("/:id",PointsControllers.getTournamentPoints)
//ruta para traer todos los puntos de un torneo
router.get("/tournaments/:id",PointsControllers.getAllPointsInTournament)
//ruta para traer tabla de puntos por fase
router.get("/fasepoint/:id/:tournamentId", PointsControllers.getFasePoints)
//ruta para borrar tabla individual de points
router.delete("/:userId", PointsControllers.deleteTablePoints)

module.exports = router