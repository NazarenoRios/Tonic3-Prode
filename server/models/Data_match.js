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
        validate:{
            isInt:true
        }
    },
    penalties : {
        type: S.INTEGER,
        defaultValue : 0,
        validate:{
            isInt:true
        }
    }
},{sequelize:db,modelName:'data_match'})



module.exports=Data_match