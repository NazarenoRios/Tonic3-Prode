const db = require('../config/db')
const S=require('sequelize')


class Points extends S.Model{}

Points.init({
    points:{
        type:S.INTEGER,
        defaultValue : 0
    }
},{sequelize:db,modelName:'point'})

class PointsFase extends S.Model{}

PointsFase.init({
    points:{
        type:S.INTEGER,
        defaultValue : 0
    },
    fase:{
        type:S. INTEGER
    }
},{sequelize:db,modelName:'points_fase'})

module.exports = {Points,PointsFase}