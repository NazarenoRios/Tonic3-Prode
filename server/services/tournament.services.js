const { Op } = require("sequelize")
const { Tournament, Tournament_teams } = require("../models")

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

    static async modifyTournament(tournament,{name,logo,description,participants}){
        try{
        tournament.name = name
        tournament.logo = logo
        tournament.description= description
        tournament.participants = participants
        return await tournament.save()
        } catch(error){
            console.log(error)
        }
    }

    static async addTeam(idTournament,idTeam){
        try{
               return await Tournament_teams.create({
                        teamId : idTeam,
                        tournamentId : idTournament
                  })
        }catch(error){
            console.log(error);
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