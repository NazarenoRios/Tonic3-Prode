const db = require('../config/db')
const S=require('sequelize')

class PointsFase extends S.Model{}

PointsFase.init({
    id:{
        type: S.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },
    points:{
        type:S.INTEGER,
        defaultValue : 0
    },
    fase:{
        type:S. INTEGER,
        defaultValue: 0,
    },
    tournamentId : {
        type:S.INTEGER,
        allowNull: true
    },
    userId: {
        type :S.INTEGER,
        allowNull: true
    }
},{sequelize:db,modelName:'fase'})

module.exports = PointsFase