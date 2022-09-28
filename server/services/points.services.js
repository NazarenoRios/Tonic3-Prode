const Points = require("../models/Points")
const BetServices = require("./bet.services");
const PointsFase = require("../models/PointsFase");
const push = require("../utils/webpush");
const { Team } = require("../models");

class PointsServices {
    
    static async getAllPointsInTournament (tournamentId){
        try{
            return await Points.findAll({where:{
                tournamentId:tournamentId
                },
               order: [
                ['points', 'DESC']
            ],})
        }catch(error){
            console.log(error);
        }
    }

    static async getTournamentPoints(userId, tournamentId) {
        try {
            const points = await Points.findOne({
                where: {
                    userId: userId,
                    tournamentId: tournamentId
                },
                order: [
                    ['points', 'DESC']
                ]
            })
            return points
        } catch (error) {
            console.log(error);
        }
    }

    static async getFasePoints (userId,tournamentId){
        try{
            return await PointsFase.findAll({
                where:{
                    userId:userId,
                    tournamentId:tournamentId
                },
                order: [
                    ['points', 'DESC']
                ]
            })
        }catch(error){
            console.log(error);
        }
    }

    static async createTablePoints(user,tournament){
        try{   
            const pointsTable = await Points.create({
                points : 0,
                userId : user.id,
                tournamentId : tournament.id
                })

                for (let i = tournament.participants/2; i >= 1  ; i/=2) {
                    await PointsFase.create({
                      points : 0,
                      fase : i,
                      tournamentId : tournament.id,
                      userId : user.id
                    })
                  }
            return pointsTable
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
                        const team = await Team.findByPk(bet.winner_id)
                        console.log(team)
                        await push.sendPush(`Ganaste 1 punto por tu apuesta a :`,`${team.name}`)
                        const pointFase = await PointsFase.findOne({where: {
                            tournamentId: match.tournamentId, 
                            userId: bet.userId,
                            fase: match.fase
                        }})
                        pointFase.points = pointFase.points + 1;
                        pointFase.save()

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