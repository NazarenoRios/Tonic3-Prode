const db = require('../config/db')
const S=require('sequelize')


class Match extends S.Model{}


Match.init({
    date:{
        type:S.DATE,
        allowNull:false
    },
    winner:{
        //WINNER VA A SER TEAM_ID DEL EQUIPO GANADOR
        type:S.INTEGER,
    },
    info:{
        type:S.TEXT
    }
},{sequelize:db,modelName:'match'})

module.exports=Match