const express = require("express")
const PlayerController = require("../controllers/player.controller")
const router = express.Router()

//ruta para crear un jugador
router.post("/create",PlayerController.createPlayer)
//ruta para traer todos los jugadores
router.get("/all",PlayerController.getAllPlayers)
//ruta para encontrar un jugador por id
router.get("/:id",PlayerController.findByid)
//ruta para buscar un jugador
router.get("/search/:name",PlayerController.findByName)
//ruta para modificar un jugador
router.put("/modify/:id",PlayerController.modifyPlayer)
//ruta para asignar un jugador a un equipo
router.put("/team/:id",PlayerController.asignTeam)
//ruta para hacer titular a un Jugador
router.put("/titular/:id",PlayerController.playerTitular)

//ruta para sumar un gol de un jugador en un partido
router.put("/goal/:id",PlayerController.addGoalsInMatch)
//ruta para sumar una falta a un jugador en un partido
router.put("/fault/:id",PlayerController.addFaultsInMatch)
//ruta para agregar una tarjeta a un jugador en un partido
router.put("/card/:id",PlayerController.addCardInMatch)

//ruta para eliminar un jugador
router.delete("/:id",PlayerController.deletePlayer)

module.exports = router