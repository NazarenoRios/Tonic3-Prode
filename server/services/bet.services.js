const { Bet, Match } = require("../models")

class BetServices {

    static async createBet(body){
        try{
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

    static async getBet (id){
        try{  
           return await Bet.findByPk(id)
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
            console.log("esto es el body en el contdown",body);
            const match = await Match.findByPk(body.matchId)
             console.log("*************+",match.date);
            const total = Date.parse(match.date) - Date.parse(new Date());
            console.log("esto es el total en milisegundos",total);
            if (total < 7200000 || match.date===null ) {
                console.log("te quedatse sin tiempo!!!!",total);
                return false
            }else return body
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BetServices