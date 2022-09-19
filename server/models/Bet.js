const db = require('../config/db')
const S = require('sequelize')
const Match = require('./Match')


class Bet extends S.Model { }


Bet.init({
    winner_id: {
        type: S.INTEGER,
        validate : { function (bet){
            Bet.prototype.dateValidator(bet)
        }}
    },
    goals: {
        type: S.INTEGER
    },
    cards: {
        type: S.INTEGER
    },
    faults: {
        type: S.INTEGER
    },
    possession: {
        type: S.INTEGER
    },
    player_goals: {
        type: S.INTEGER,
        validate : { dateValidator(){
            this.prototype.dateValidator
        }}
    },
    tournamentId: {
        type: S.INTEGER
    }
}, { sequelize: db, modelName: 'bet' })

Bet.prototype.dateValidator = async (bet) => {
    try {
        const match = await Match.findOne({ where: { id: bet.date } })
        const total = Date.parse(match.date) - Date.parse(new Date());
        if (total < 7200000 || date===null ) throw new Error("Time is over")
        console.log("todavia queda tiempo",total);
        return bet
    } catch (error) {
        console.log(error);
    }
}

// Bet.addHook("beforeCreate", async (bet)=>{
//     try {
//         const match = await Match.findOne({ where: { id: bet.date } })
//         const total = Date.parse(match.date) - Date.parse(new Date());
//         if (total < 7200000 || date===null ) throw new Error("Time is over")
//         console.log("todavia queda tiempo",total);
//         return bet
//     } catch (error) {
//         console.log(error);
//     }
// })


module.exports=Bet