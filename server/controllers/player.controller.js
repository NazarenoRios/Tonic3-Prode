const PlayerServices = require("../services/player.services")

class PlayerController{
    static async createPlayer (req,res){
        try{
            const player = await PlayerServices.createPlayer(req.body)
            return res.status(201).send(player)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllPlayers (req,res){
        try{
            const player = await PlayerServices.getAllPlayers()
            return res.status(200).send(player)
        } catch(error){
            console.log(error)
        }
    }

      static async findByid(req,res){
        try{
            const player = await PlayerServices.findByid(req.params.id)
            return res.status(200).send(player)
        } catch(error){
            console.log(error)
        }
    }

    static async findByName(req,res){
        try{
            const player = await PlayerServices.findByName(req.params.name)
            return res.status(200).send(player)
        } catch(error){
            console.log(error)
        }
    }

    static async modifyPlayer(req,res){
        try{
            const player = await PlayerServices.findByid(req.params.id)
            const updatedPlayer = await PlayerServices.modifyPlayer(player,req.body)
            return res.status(200).send(updatedPlayer)
        } catch(error){
            console.log(error)
        }
    }

    static async asignTeam(req,res){
        try{
            const player = await PlayerServices.findByid(req.params.id)
            const updatedPlayer = await PlayerServices.asignTeam(player,req.body)
            return res.status(200).send(updatedPlayer)
        } catch(error){
            console.log(error)
        }
    }

    static async playerTitular(req,res){
        try{
            const player = await PlayerServices.findByid(req.params.id)
            const titular = await PlayerServices.playerTitular(player)
            return res.status(200).send(titular)
        } catch(error){
            console.log(error)
        }
    }

    static async addGoalsInMatch(req,res){
        try{
            const dataPlayer = await PlayerServices.findPlayerData(req.params.id)
            const dataMatchPlayer = await PlayerServices.addGoalsInMatch(dataPlayer)
            return await res.status(201).send(dataMatchPlayer)
        }catch(error){
            console.log(error);
        }
    }

    static async addFaultsInMatch(req,res){
        try{
            const dataPlayer = await PlayerServices.findPlayerData(req.params.id)
            const dataMatchPlayer = await PlayerServices.addFaultsInMatch(dataPlayer,req.body)
            return res.status(200).send(dataMatchPlayer)
        } catch(error){
            console.log(error)
        }
    }

    static async addCardInMatch(req,res){
        try{
            const dataPlayer = await PlayerServices.findPlayerData(req.params.id)
            const dataMatchPlayer = await PlayerServices.addCardInMatch(dataPlayer,req.body)
            return res.status(200).send(dataMatchPlayer)
        } catch(error){
            console.log(error)
        }
    }

    static async deletePlayer(req,res){
        try{
            await PlayerServices.deletePlayer(req.params.id)
            return res.sendStatus(204)
        } catch(error){
            return res.sendStatus(500).json({message:error.message})
        }
    }
}

module.exports = PlayerController