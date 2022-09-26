const Points = require("../models/Points")
const BetServices = require("./bet.services");

class PointsServices {
    
    static async getAllPointsInTournament(tournamentId){
        try{
            return await Points.findAll({where:{tournamentId},order: [
                ['points', 'DESC']
            ],})
        }catch(error){
            console.log(error);
        }
    }

    static async getTournamentPoints(user, tournament) {
        try {
            return await Points.findOne({
                where: {
                    userId: user,
                    tournamentId: tournament
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async createTablePoints(user,tournament){
        try{
            return await Points.create({
                points : 0,
                userId : user.id,
                tournamentId : tournament.id
                })
        }catch(error){
            console.log(error);
        }
    }

    static async addPoint(match) {
        try {
            if (match.winner != null) {
                const bets = await BetServices.getAllBets()
                bets.map(async (bet) => {
                    if (bet.winner_id === match.winner) {
                        const point = await PointsServices.getTournamentPoints(bet.userId, match.tournamentId)
                        point.points = point.points + 1;
                        point.save();
                    }
                })
                return "DONE"
            }
            return "!!!!"
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteATablePoint(userId){
        try {
            return Points.destroy({where:{
                userId: userId
            }})
        }
        catch (error){
            console.log(error);
        }
    }

}

module.exports = PointsServices