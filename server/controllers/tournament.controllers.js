const TournamentServices = require("../services/tournament.services")

class TournamentController {

    static async createTournament (req,res){
        try{
            const tournament = await TournamentServices.createTournament(req.body)
            return res.status(201).send(tournament)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllTournament (req,res){
        try{
            const tournaments = await TournamentServices.getAllTournament()
            return res.status(200).send(tournaments)
        } catch(error){
            console.log(error)
        }
    }

      static async findByid(req,res){
        try{
            const tournament = await TournamentServices.findByid(req.params.id)
            return res.status(200).send(tournament)
        } catch(error){
            console.log(error)
        }
    }

    static async findByName(req,res){
        try{
            const tournament = await TournamentServices.findByName(req.params.name)
            return res.status(200).send(tournament)
        } catch(error){
            console.log(error)
        }
    }

    static async modifyTournament(req,res){
        try{
            const tournament = await TournamentServices.findByid(req.params.id)
            const updatedTournament = await TournamentServices.modifyTournament(tournament,req.body)
            return res.status(200).send(updatedTournament)
        } catch(error){
            console.log(error)
        }
    }

    static async addTeam(req,res){
        try{
            const teamTournament = await TournamentServices.addTeam(req.params.idtournament,req.body.teamId)
            return res.status(201).send(teamTournament)
        } catch(error){
            console.log(error)
        }
    }

    static async endTournament (req,res){
        try{
            const tournament = await TournamentServices.endTournament(req.params.id)
            return res.status(201).send(tournament)
        }catch(error){
            console.log(error);
        }
    }

    static async deleteTournament(req,res){
        try{
            await TournamentServices.deleteTournament(req.params.id)
            return res.sendStatus(204)
        } catch(error){
            return res.sendStatus(500).json({message:error.message})
        }
    }

}

module.exports = TournamentController