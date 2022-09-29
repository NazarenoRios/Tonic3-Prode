const express = require("express")
const router = express.Router()
const TeamController = require("../controllers/team.controllers")
const { validate_admin } = require("../middleware/validate_admin")

//ruta para crear un equipo
router.post("/create",validate_admin,TeamController.createTeam)
//ruta para traer todos los equipos
router.get("/all",TeamController.getAllTeams)
//ruta para encontrar un equipo por id
router.get("/:id",TeamController.findByid)
//ruta para buscar un equipo 
router.get("/search/:name",TeamController.findByName)
//ruta para modificar un equipo
router.put("/modify/:id",validate_admin,TeamController.modifyTeam)
//ruta para eliminar un equipo
router.delete("/:id",validate_admin,TeamController.deleteTeam)

module.exports = router