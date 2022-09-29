const { Notification } = require("../models")
const NotificationServices = require("../services/Notification.services")
const { sendPush } = require("../utils/webpush")

class NotificationsController {

    static async createNotification (req,res){
        try{
           const notification = await NotificationServices.createNotification(req.body) 
           const total = Date.parse(notification.date) - Date.parse(new Date())
           setTimeout(async ()=>{
            const checkNotification = await Notification.findByPk(notification.id)           
            if(checkNotification) return await sendPush(checkNotification.dataValues.tittle , checkNotification.dataValues.body)
            if(!checkNotification) return 
           },total) 
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