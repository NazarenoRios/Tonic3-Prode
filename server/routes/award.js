const express = require("express")
const AwardController = require("../controllers/award.controller")
const router = express.Router()

//ruta para crear un premio
router.post("/create",AwardController.createAward)
//ruta para traer todos los premios
router.get("/all",AwardController.getAllAward)
//ruta para encontrar un premio por id
router.get("/:id",AwardController.findByid)
//ruta para modificar un premio
router.put("/modify/:id",AwardController.modifyAward)
//ruta para eliminar un premio
router.delete("/:id",AwardController.deleteAward)

module.exports = router