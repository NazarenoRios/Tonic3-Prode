const Points = require("../models/Points")
const BetServices = require("./bet.services");

class PointsServices {

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



}

module.exports = PointsServices