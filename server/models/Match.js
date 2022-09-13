const db = require('../config/db')
const S=require('sequelize')
const Data_match = require('./Data_match')


class Match extends S.Model{}


Match.init({
    date:{
        type:S.DATE,
    },
    winner:{
        //WINNER VA A SER TEAM_ID DEL EQUIPO GANADOR
        type:S.INTEGER,
    },
    info:{
        type:S.TEXT
    },
    match_end:{
        type:S.BOOLEAN
    },
    fase:{
        type:S.INTEGER
    },
    match: {
        type: S.INTEGER
    },
    next : {
        type: S.INTEGER
    }

},{sequelize:db,modelName:'match'})

Match.addHook('afterBulkCreate',(data)=>{
    console.log(data[0],data[1],data)
   // Match.findAll({where:{tournamentId:data[0].tournamentId}})
   // Data_match.bulkCreate()
})

module.exports=Match