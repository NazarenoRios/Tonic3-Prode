const express = require("express")
const PlayerController = require("../controllers/player.controller")
const { validate_admin } = require("../middleware/validate_admin")
const router = express.Router()

//ruta para crear un jugador
router.post("/create",validate_admin,PlayerController.createPlayer)
//ruta para traer todos los jugadores
router.get("/all",PlayerController.getAllPlayers)
//ruta para encontrar un jugador por id
router.get("/:id",PlayerController.findByid)
//ruta para buscar un jugador
router.get("/search/:name",PlayerController.findByName)
//ruta para modificar un jugador
router.put("/modify/:id",validate_admin,PlayerController.modifyPlayer)
//ruta para asignar un jugador a un equipo
router.put("/team/:id",validate_admin,PlayerController.asignTeam)
//ruta para hacer titular a un Jugador
router.put("/titular/:id",validate_admin,PlayerController.playerTitular)
//ruta para eliminar un jugador
router.delete("/:id",validate_admin,PlayerController.deletePlayer)

module.exports = router