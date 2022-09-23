const { Op } = require("sequelize")
const { Tournament, Tournament_teams } = require("../models")
const AwardSevices = require("./award.services")

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
           const tournaments= await Tournament.findAll()
           if(tournaments) return tournaments
           if(!tournaments) return false
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

    static async modifyTournament(tournament,{name,logo,description,participants,state}){
        try{
        tournament.name = name
        tournament.logo = logo
        tournament.description= description
        tournament.participants = participants
        tournament.state= state
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

    static async endTournament (id){
        try{
            const tournament = await TournamentServices.findByid(id)
            if(!tournament.state){
                tournament.state = true
                tournament.save()
                // await AwardSevices.sendAward(id)
                return "end of the tournament"
            }
            if(tournament.state){
                tournament.state = false
                tournament.save()
                return "tournament starts again"
            }
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