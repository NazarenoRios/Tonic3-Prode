const { Op } = require("sequelize")
const { Tournament } = require("../models")

class TournamentServices {

    static async createTournament (body){
        try{
           return await Tournament.create(body)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllTournament (){
        try{
           return await Tournament.findAll()
        } catch(error){
            console.log(error)
        }
    }    

    static async findByid(id){
        try{
           return await Tournament.findByPk(id)
            
        } catch(error){
            console.log(error)
        }
    }

    static async findByName(name){
        try{
           return await Tournament.findAll({
            where:{name: {
                [Op.iLike]: `%${name}%`
            }}
           })
            
        } catch(error){
            console.log(error)
        }
    }

    static async modifyTournament(tournament,{name,logo,description,matches}){
        try{
        tournament.name = name
        tournament.logo = logo
        tournament.description= description
        tournament.matches = matches
        return await tournament.save()
        } catch(error){
            console.log(error)
        }
    }

    static async deleteTournament(id){
        try{
          return await Tournament.destroy({ where:{id} })       
        } catch(error){
           return res.sendStatus(500).json({message:error.message})
        }
    }

}

module.exports = TournamentServices