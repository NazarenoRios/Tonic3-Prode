const db = require('../config/db')
const S=require('sequelize')


class Points extends S.Model{}


Points.init({
    day_points:{
        type:S.DATE,
        allowNull:false
    },
    total_points:{
        //WINNER VA A SER TEAM_ID DEL EQUIPO GANADOR
        type:S.INTEGER,
    }
},{sequelize:db,modelName:'point'})

module.exports=Points