const NotificationServices = require("../services/Notification.services")

class NotificationsController {

    static async createNotification (req,res){
        try{
           const notification = await NotificationServices.createNotification(req.body)
                return res.status(201).send(notification)
        }catch(error){
            console.log(error)
        }
    }

    static async getAllNotifications (req,res){
        try{
            const notification = await NotificationServices.getAllNotifications()
            return res.status(200).send(notification)
        } catch(error){
            console.log(error)
        }
    }

    static async getNotification (req,res){
        try{
            const notification = await NotificationServices.getNotification(req.params.userId)
            return res.status(200).send(notification)
        } catch(error){
            console.log(error)
        }
    }

    static async modifyNotification (req,res){
        try{
            const notification = await NotificationServices.getNotificationsById(req.params.id)
            const modifyNotification = await NotificationServices.modifyNotification(notification,req.body)
            res.status(200).send(modifyNotification)
        }catch(error){
            console.log(error);
        }
    }

    static async deleteNotification (req,res){
        try{
            await BetServices.deleteNotification(req.params.id)
            return res.status(200).send("deleted")
        }catch(error){
            console.log(error);
        }
    }


}

module.exports = NotificationsController