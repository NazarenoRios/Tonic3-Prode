const express = require("express")
const PointsControllers = require("../controllers/points.controller")
const router = express.Router()

//ruta para obtener todos los puntos de todos los usuarios en un torneo
router.get("/:id",PointsControllers.getTournamentPoints)

module.exports = router