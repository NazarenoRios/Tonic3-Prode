const db = require('../config/db')
const S=require('sequelize')


class Bet extends S.Model{}


Bet.init({
    user_prediction:{
        type:S.DATE,
        allowNull:false
    },
    winner:{
        //WINNER VA A SER TEAM_ID DEL EQUIPO GANADOR
        type:S.INTEGER,
    },
    goals:{
        type:S.INTEGER
    }
},{sequelize:db,modelName:'bet'})

module.exports=Bet