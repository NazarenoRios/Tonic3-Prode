const { Bet } = require("../models")
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

    static async getBet (req,res){
        try{
            const bet = await BetServices.getBet()
            return res.status(200).send(bet)
        } catch(error){
            console.log(error)
        }
    }

    static async modifyBet (req,res){
        try{
            const bet = await BetServices.getBet(req.params.id)
            const modifyBet = await BetServices.modifyBet(bet,req.body)
            return res.status(200).send(modifyBet)
        }catch(error){
            console.log(error);
        }
    }

    static async deleteBet (req,res){
        try{
            await BetServices.deleteBet(req.params.id)
            return res.status(200).send("deleted")
        }catch(error){
            console.log(error);
        }
    }

}

module.exports = BetController