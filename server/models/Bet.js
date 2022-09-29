const db = require('../config/db')
const S = require('sequelize')
const Match = require('./Match')


class Bet extends S.Model { }


Bet.init({
    winner_id: {
        type: S.INTEGER,
        validate:{
            isInt:true
        }
    },
    goals: {
        type: S.INTEGER,
        validate:{
            isInt:true
        }
    },
    cards: {
        type: S.INTEGER,
        validate:{
            isInt:true
        }
    },
    faults: {
        type: S.INTEGER,
        validate:{
            isInt:true
        }
    },
    possession: {
        type: S.INTEGER,
        validate:{
            isInt:true
        }
    },
    player_goals: {
        type: S.INTEGER,
        validate:{
            isInt:true
        }
    },
    tournamentId: {
        type: S.INTEGER
    }
}, { sequelize: db, modelName: 'bet' })


module.exports=Bet