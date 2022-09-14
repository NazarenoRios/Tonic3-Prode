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

    static async findPlayerData (id){
        try{
            return await PlayerData.findOne({
                where: {
                    playerId:id
                }
            })
        }catch (error){
            console.log(error);
        }
    }

    static async addGoalsInMatch(playerData){
        try{
            playerData.goal_match = playerData.goal_match+1
            return await playerData.save()
        } catch(error){
            console.log(error)
        }
    }

    static async addFaultsInMatch(playerData){
        try{
            playerData.faults = playerData.faults+1
            return await playerData.save()
        } catch(error){
            console.log(error)
        }
    }

    static async addCardInMatch(playerData,body){
        try{
            playerData.cards.push(body)
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