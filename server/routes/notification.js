const express = require("express")
const NotificationsController = require("../controllers/notification.controller")
const { validate_admin } = require("../middleware/validate_admin")
const router = express.Router()
//ruta para crear una push notification
router.post("/create",validate_admin,NotificationsController.createNotification)
//ruta para traer todas las push
router.get("/all",NotificationsController.getAllNotifications)
//ruta para traer una push por userId
router.get("/usernotification/:userId",NotificationsController.getNotification)
//ruta para modificar una push
router.put("/modify/:id",validate_admin,NotificationsController.modifyNotification)
//ruta para eliminar una push
router.delete("/delete/:id",validate_admin,NotificationsController.deleteNotification)

module.exports = router