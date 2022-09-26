const User = require("../models/User");
const Points = require("../models/Points")
const BetServices = require("./bet.services");

class PointsServices {
    
    static async points (tournamentId){
        try{
            const points =  await Points.findAll({where:{
                tournamentId:tournamentId
                },
               order: [
                ['points', 'DESC']
            ],})
            return points
        }catch(error){
            console.log(error);
        }
    }

    static async getAllPointsInTournament(tournamentId){
        try{
            const points = PointsServices.points(tournamentId)
            const pointsAndUsers= []
            for (let i = 0; i < points.length; i++) {
                 const {name,lastname,country,awards} = await User.findByPk(points[i].dataValues.userId)
                 pointsAndUsers.push({points : points[i].dataValues.points,
                                      userId : points[i].dataValues.userId,
                                      tournamentId:points[i].dataValues.tournamentId,
                                      name:name,
                                      lastname:lastname,
                                      country:country,
                                      awards:awards
                                    })   
            }
            console.log("esto es points and users",pointsAndUsers);
          return pointsAndUsers  
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

                        //testear si funciona 
                        const pointsMatch =    Object.assign([], point.match_points); 
                        await pointsMatch.push({points:pointsMatch.points+1,matchId :bet.match,date:match.date,fase:match.fase})
                        await point.update({match_points : pointsMatch})


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