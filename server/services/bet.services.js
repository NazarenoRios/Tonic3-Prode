const { Bet, Match, User, Team } = require("../models")

const { set_data } = require("../metrics/custom_metrics/user_histogram")

class BetServices {
    static async createBet(body){
        try{
           await set_data(body)
           return await Bet.create(body)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllBets (){
        try{
           return await Bet.findAll()
        } catch(error){
            console.log(error)
        }
    }  

    static async getBet (userId,matchId){
        try{
           const bet = await Bet.findOne({
            where:{
                userId : userId,
                matchId : matchId
            }
           })
           const team = await Team.findByPk(bet.winner_id)
           return [bet,team]

        } catch(error){
            console.log(error)
        }
    }

    static async modifyBet (bet,body){
        try{
            bet.winner_id = body.winner_id
            bet.faults = body.faults
            bet.tournamentId = body.tournamentId
            bet.matchId = body.matchId
            bet.save()
            return await bet
        }catch(error){
            console.log(error);
        }
    }

    static async deleteBet(id){
        try{
          return await Bet.destroy({ where:{id} })       
        } catch(error){
           return res.sendStatus(500).json({message:error.message})
        }
    }

    static async countdown (body){
        try {
            const match = await Match.findByPk(body.matchId)
            const total = Date.parse(match.date) - Date.parse(new Date())
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours = Math.floor( (total/(1000*60*60)) % 24 );
            const days = Math.floor( total/(1000*60*60*24) );
            if (total < 7200000 || match.date===null ) {
                console.log("te quedatse sin tiempo!!!!",total)
                return false
            }else return {body : body, 
                          time : {
                            message: `Time remaning : ${days} days,${hours} hours, ${minutes} minutes,${seconds} seconds`,
                            total:total,days:days,hours:hours,minutes:minutes,seconds:seconds}
                        }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = BetServices