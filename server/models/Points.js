const db = require('../config/db')
const S=require('sequelize')


class Points extends S.Model{}

Points.init({
    points:{
        type:S.INTEGER,
        defaultValue : 0
    },
    match_points : {
        type: S.ARRAY(S.JSON),
        defaultValue : [{points:0}] //test
    }
},{sequelize:db,modelName:'point'})

module.exports=Points