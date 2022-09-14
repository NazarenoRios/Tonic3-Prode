const db = require('../config/db')
const S=require('sequelize')
const Data_match = require('./Data_match')


class Match extends S.Model{
}


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
    number_key: {
        type: S.INTEGER
    },
    next : {
        type: S.INTEGER
    }

},{sequelize:db,modelName:'match'})

Match.addHook('afterBulkCreate',(matches)=>{
    let matches_id=[]
    matches.forEach(match=>{
        for(let i=0 ;i<2 ; i++)matches_id.push({matchId:match.id})
    })
    Data_match.bulkCreate(matches_id)
})

module.exports=Match