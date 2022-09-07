const db = require('../config/db')
const S=require('sequelize')


class Player extends S.Model{}


Player.init({
    fullname:{
        type:S.STRING,
        allowNull:false
    },
    goals:{
        type:S.INTEGER,
        defaultValue:0
    },
    info:{
        type:S.TEXT
    }
},{sequelize:db,modelName:'player'})

module.exports=Player