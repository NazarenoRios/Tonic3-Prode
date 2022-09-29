const BetServices = require("../services/bet.services")
const push = require("../utils/webpush")
const { Team } = require("../models")

class BetController {

    static async createBet (req,res){
        try{
           const validate = await BetServices.countdown(req.body)
           console.log("esto es validate",validate);
            await BetServices.createBet(validate.body)
            if(validate) {
                const team = await Team.findByPk(req.body.winner_id)
                await push.sendPush("Felicidades",`Tu voto a ${team.dataValues.name} se registro con exito`)
                return res.status(201).send(validate.time)
            }
            if(!validate) return res.status(401).send("Time is Over")
        } catch(error){
            console.log(error)
        }
    }

    static async getAllBets (req,res){
        try{
            const bet = await BetServices.getAllBets()
            return res.status(200).send(bet)
        } catch(error){
            console.log(error)
        }
    }

    static async getBet (req,res){
        try{
            const bet = await BetServices.getBet(req.params.user,req.params.match)
            return res.status(200).send(bet)
        } catch(error){
            console.log(error)
        }
    }

    static async modifyBet (req,res){
        try{
            const bet = await BetServices.getBet(req.params.id)
            const validate = await BetServices.countdown(bet)
            const modifyBet = await BetServices.modifyBet(validate,req.body)
            if(bet)return res.status(200).send(modifyBet)
            if(!bet) return res.status(401).send("Time is Over")
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