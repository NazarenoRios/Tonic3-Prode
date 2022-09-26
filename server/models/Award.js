const db = require('../config/db')
const S=require('sequelize')


class Award extends S.Model{}


Award.init({
    name:{
        type:S.STRING,
        allowNull:false
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