const { Bet } = require("../models")

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

}

module.exports = BetServices