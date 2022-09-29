const express = require("express")
const NotificationsController = require("../controllers/notification.controller")
const router = express.Router()

//ruta para crear una push notification
router.post("/create",NotificationsController.createNotification)
//ruta para traer todas las push
router.get("/all",NotificationsController.getAllNotifications)
//ruta para traer una push por userId
router.get("/usernotification/:userId",NotificationsController.getNotification)
//ruta para modificar una push
router.put("/modify/:id",NotificationsController.modifyNotification)
//ruta para eliminar una push
router.delete("/delete/:id",NotificationsController.deleteNotification)

module.exports = router