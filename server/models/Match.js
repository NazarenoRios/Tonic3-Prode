const db = require('../config/db')
const S=require('sequelize')
const Data_match = require('./Data_match')
const Bet = require('./Bet')


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

Match.addHook("afterUpdate",(match)=>{
    if(match.winner!=null) {
        const bets = Bet.findAll()
        for (let i = 0; i < bets.length; i++) {
          for(let key in bets[i]) {
            if(bets[i].winner===match.winner) return console.log("********WINNER***********",bets[i]);
        }     
        }
    }
})

module.exports=Match