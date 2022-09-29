const express = require("express")
const PointsControllers = require("../controllers/points.controller")
const { validate_admin } = require("../middleware/validate_admin")
const router = express.Router()

//ruta para obtener todos los puntos de todos los usuarios en un torneo
// router.get("/:id/:tournamentId",PointsControllers.getTournamentPoints)
//ruta para traer todos los puntos de un torneo
router.get("/tournaments/:id",PointsControllers.getAllPointsInTournament)
//ruta para traer tabla de puntos por fase
router.get("/fasepoint/:id/:tournamentId", PointsControllers.getFasePoints)
//ruta para borrar tabla individual de points
router.delete("/:userId",validate_admin, PointsControllers.deleteTablePoints)

module.exports = router