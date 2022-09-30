const express = require("express")
const NotificationsController = require("../controllers/notification.controller")
const router = express.Router()


/** 
*  @swagger
*  components:
*  schemas:
*   Notification:
*     type : object
*     properties:
*       tittle:
*         type: string
*         description : the title of the notification
*       body: 
*         type : text
*         description: the content of the body
*       img:
*         type: string
*         description: an image on the notification
*       date:
*         type : date
*         description: the date of the notification
*       userId: 
*         type: integer
*         description: the id of user 
*     required:
*       - tittle
*       - body
*       - img
*       - date
*       - userId
*     example:
*       tittle: Welcome!!
*       body: welcome to prode!!
*       img : https://seeklogo.com/images/C/copa-argentina-nuevo-logo-AF2D2FF2DA-seeklogo.com.png
*       date: Sep 30 2022 02:17:54 GMT-0300
*       userId: 4
*/



//ruta para crear una push notification
/**
 *  @swagger
*   /api/notification/create:
*   post:
*     sumary: create a new notification
*     tags: [Notification]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Notification'
*     responses:
*       200:
*         description: new notification created!
*/
router.post("/create",NotificationsController.createNotification)


//ruta para traer todas las push
/**
*  @swagger
*  /api/notification/all:
*   get:
*     sumary: return all notification
*     tags: [Notification]
*     responses:
*       200:
*         description: all notification!
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/Notification'
*/
router.get("/all",NotificationsController.getAllNotifications)


//ruta para traer una push por userId
/**
*  @swagger
*  /api/team/usernotification{userId}:
*   get:
*     sumary: return notification to user
*     tags: [Notification]
*     parameters:
*       - in: path
*         name: userId
*         schema:
*          type: string
*         required: true
*         description: the user id
*     responses:
*       200:
*         description: notifications found!
*         content:
*           application/json:
*            schema:
*             type: object
*             $ref: '#/components/schemas/Notification'
*       404: 
*         description: notification not found
*/
router.get("/usernotification/:userId",NotificationsController.getNotification)


//ruta para modificar una push
/**
*  @swagger 
*  /api/notification/modify/{id}:
*   put:
*     sumary: update a notification
*     tags: [Notification]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the notification id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: array
*             $ref: '#/components/schemas/notification'
*     responses:
*       200:
*         description: notification updated!
*       404: 
*         description: notification not found
*/
router.put("/modify/:id",NotificationsController.modifyNotification)


//ruta para eliminar una push
/**
*  @swagger
*  /api/Notification/delete{id}:
*   delete:
*     sumary: delete a notification
*     tags: [Notification]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: the notification id
*     responses:
*       200:
*         description: notification deleted!
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/Notification'
*       404: 
*         description: notification not found
*/
router.delete("/delete/:id",NotificationsController.deleteNotification)

module.exports = router