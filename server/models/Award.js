const db = require('../config/db')
const S=require('sequelize')


class Award extends S.Model{}


Award.init({
    place :{
        type: S.INTEGER,
        allowNull: true
    },
    name:{
        type:S.STRING,
        allowNull:false,
        validate:{
            isAlpha:true,
            len:[2,15]
        }
    },
    img:{
        type:S.STRING,
    },
    info:{
        type:S.TEXT
    },
    country : {
        type : S.STRING,
        allowNull : false
    }
},{sequelize:db,modelName:'award'})

module.exports = Award