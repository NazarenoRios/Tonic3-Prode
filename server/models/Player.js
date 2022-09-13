const db = require('../config/db')
const S=require('sequelize')


class Player extends S.Model{}


Player.init({
    fullname:{
        type:S.STRING,
        allowNull:false
    },
    age : {
        type : S.INTEGER
    },
    img : {
        type: S.STRING
    },
    goals:{
        type:S.INTEGER,
        defaultValue:0
    },
    info:{
        type:S.TEXT
    },
    titular: {
        type :S.BOOLEAN,
        defaultValue:false
    }
},{sequelize:db,modelName:'player'})

module.exports=Player