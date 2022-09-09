const { Op } = require("sequelize")
const { Team } = require("../models")

class TeamServices {

    static async createTeam (body){
        try{
           return await Team.create(body)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllTeams (){
        try{
           return await Team.findAll()
        } catch(error){
            console.log(error)
        }
    }    

    static async findByid(id){
        try{
           return await Team.findByPk(id)
            
        } catch(error){
            console.log(error)
        }
    }

    static async findByName(name){
        try{
           return await Team.findAll({
            where:{name: {
                [Op.iLike]: `%${name}%`
            }}
           })
            
        } catch(error){
            console.log(error)
        }
    }

    static async modifyTeam(team,{name,logo,info,phase}){
        try{
        team.name = name
        team.logo = logo
        team.info= info
        team.phase = phase
        return await team.save()
        } catch(error){
            console.log(error)
        }
    }

    static async deleteTeam(id){
        try{
          return await Team.destroy({ where:{id} })       
        } catch(error){
           return res.sendStatus(500).json({message:error.message})
        }
    }
}

module.exports = TeamServices