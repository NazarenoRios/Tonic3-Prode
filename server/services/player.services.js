const { Op } = require("sequelize")
const { PlayerData } = require("../models")
const Player = require("../models/Player")

class PlayerServices{
    static async createPlayer (body){
        try{
           return await Player.create(body)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllPlayers (){
        try{
           return await Player.findAll()
        } catch(error){
            console.log(error)
        }
    }    

    static async findByid(id){
        try{
           return await Player.findByPk(id)
            
        } catch(error){
            console.log(error)
        }
    }

    static async findByName(name){
        try{
           return await Player.findAll({
            where:{name: {
                [Op.iLike]: `%${name}%`
            }}
           })
            
        } catch(error){
            console.log(error)
        }
    }

    static async modifyPlayer(player,{fullname,age,img,info,goals,teamId,titular}){
        try{
            player.fullname = fullname
            player.age = age
            player.img = img
            player.info = info
            player.goals = goals
            player.teamId = teamId
            player.titular = titular
        return player.save()
        } catch(error){
            console.log(error)
        }
    }

    static async asignTeam(player,{teamId}){
        try{
            player.teamId = teamId
        return player.save()
        } catch(error){
            console.log(error)
        }
    }

    static async playerTitular(player){
        try{
           if(player.titular){
            player.titular = false
            return await player.save()
           }
           if(player.titular===false){
            player.titular = true
            return await player.save()
           }
        } catch(error){
            console.log(error)
        }
    }

    static async addDataMatchPlayer(id,body){
        try{
           const playerData = await PlayerData.findOne({
                where: {
                    playerId:id
                }
            })
            playerData.goal_match = body.goal_match
            playerData.cards = body.cards
            playerData.faults = body.state
            return await playerData.save()
        } catch(error){
            console.log(error)
        }
    }

    static async deletePlayer(id){
        try{
          return await Player.destroy({ where:{id} })       
        } catch(error){
           return res.sendStatus(500).json({message:error.message})
        }
    }
}

module.exports = PlayerServices