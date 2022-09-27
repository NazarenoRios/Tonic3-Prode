const db = require('../config/db')
const S=require('sequelize')


class Data_match extends S.Model{}


Data_match.init({
    id:{
        type: S.INTEGER,
    autoIncrement: true,
    primaryKey: true
    }
    ,
    goals:{
        type: S.INTEGER,
    },
    penalties : {
        type: S.INTEGER,
        defaultValue : 0
    }
},{sequelize:db,modelName:'data_match'})

module.exports=Data_match