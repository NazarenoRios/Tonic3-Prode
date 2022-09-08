const TeamServices = require("../services/team.services");

class TeamController {

    static async createTeam (req,res){
        try{
            const team= await TeamServices.createTeam(req.body)
            return res.status(201).send(team)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllTeams (req,res){
        try{
            const team = await TeamServices.getAllTeams()
            return res.status(200).send(team)
        } catch(error){
            console.log(error)
        }
    }

      static async findByid(req,res){
        try{
            const team = await TeamServices.findByid(req.params.id)
            return res.status(200).send(team)
        } catch(error){
            console.log(error)
        }
    }

    static async findByName(req,res){
        try{
            const team = await TeamServices.findByName(req.params.name)
            return res.status(200).send(team)
        } catch(error){
            console.log(error)
        }
    }

    static async modifyTeam(req,res){
        try{
            const team = await TeamServices.findByid(req.params.id)
            const updatedTeam = await TeamServices.modifyTeam(team,req.body)
            console.log(updatedTeam);
            return res.status(200).send(updatedTeam)
        } catch(error){
            console.log(error)
        }
    }

    static async deleteTeam(req,res){
        try{
            await TeamServices.deleteTeam(req.params.id)
            return res.sendStatus(204)
        } catch(error){
            return res.sendStatus(500).json({message:error.message})
        }
    }

}

module.exports = TeamController