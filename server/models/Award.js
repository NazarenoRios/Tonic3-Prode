const db = require('../config/db')
const S=require('sequelize')


class Award extends S.Model{}


Award.init({
    name:{
        type:S.STRING,
        allowNull:false
    },
    img:{
        //WINNER VA A SER TEAM_ID DEL EQUIPO GANADOR
        type:S.STRING,
    },
    info:{
        type:S.TEXT
    },
    country : {
        type: S.STRING
    }

},{sequelize:db,modelName:'award'})

module.exports=Award