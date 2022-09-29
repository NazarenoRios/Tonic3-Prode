const { Notification } = require("../models")

class NotificationServices {
    static async createNotification(body){
        try{
           return await Notification.create(body)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllNotifications (){
        try{
           return await Notification.findAll()
        } catch(error){
            console.log(error)
        }
    }  

    static async getNotificationsById (id){
        try{
           return await Notification.findByPk(id)
        } catch(error){
            console.log(error)
        }
    }  

    static async getNotification(userId){
        try{
           const notification = await Notification.findAll({
            where:{
                userId : userId
            }
           })
           return notification

        } catch(error){
            console.log(error)
        }
    }

    static async modifyNotification (notification,body){
        try{
            notification.tittle = body.tittle
            notification.body = body.body
            notification.img = body.img
            notification.date = body.date
            notification.userId = body.userId
            notification.save()
            return await notification
        }catch(error){
            console.log(error);
        }
    }

    static async deleteNotification(id){
        try{
          return await Notification.destroy({ where:{id} })       
        } catch(error){
           return res.sendStatus(500).json({message:error.message})
        }
    }

}

module.exports = NotificationServices