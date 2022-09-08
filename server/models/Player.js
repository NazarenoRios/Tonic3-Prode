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
        type: S.STRING,
        defaultValue: "https://img2.freepng.es/20180512/htw/kisspng-computer-icons-user-5af73f4c5d82c9.048741191526153036383.jpg"
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