const S = require("sequelize")
const db = require("../config/db")

class PlayerData extends S.Model{}

PlayerData.init({
    goal_match: {
        type : S.INTEGER,
        validate:{
            isInt:true
        }
    },
    cards:{
        type : S.ARRAY(S.INTEGER),
        validate:{
            isInt:true
        }
    },
    faults : {
        type : S.INTEGER,
        validate:{
            isInt:true
        }
    },
    state : {
        type : S.BOOLEAN,
        validate:{
            isInt:true
        }
    }
},{
    sequelize:db , modelName: "player_data"
})

module.exports = PlayerData