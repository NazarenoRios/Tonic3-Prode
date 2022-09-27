const db = require('../config/db')
const S=require('sequelize')


class Points extends S.Model{}

Points.init({
    points:{
        type:S.INTEGER,
        defaultValue : 0
    }
},{sequelize:db,modelName:'point'})


module.exports= Points 