const BetServices = require("../services/bet.services")

class BetController {

    static async createBet (req,res){
        try{
            const bet = await BetServices.createBet(req.body)
            return res.status(201).send(bet)
        } catch(error){
            console.log(error)
        }
    }

    static async getAllBets (req,res){
        try{
            const bet    = await BetServices.getAllBets()
            return res.status(200).send(bet)
        } catch(error){
            console.log(error)
        }
    }

}

module.exports = BetController