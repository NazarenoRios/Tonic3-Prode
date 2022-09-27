const express = require("express")
const BetController = require("../controllers/bet.controller")
const router = express.Router()

//ruta para crear una apuesta
router.post("/create",BetController.createBet)
//ruta para traer todas las apuestas
router.get("/all",BetController.getAllBets)
//ruta para traer una apuesta por id
router.get("/userbet/:user/:match",BetController.getBet)
//ruta para modificar una apuesta
router.put("/modify/:id",BetController.modifyBet)
//ruta para eliminar una apuesta
router.delete("/delete/:id",BetController.deleteBet)

module.exports = router