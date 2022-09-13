const S = require("sequelize")
const db = require("../config/db")

class PlayerData extends S.Model{}

PlayerData.init({
    goal_match: {
        type : S.INTEGER
    },
    cards:{
        type : S.ARRAY(S.INTEGER)
    },
    faults : {
        type : S.INTEGER
    },
    state : {
        type : S.BOOLEAN
    }
},{
    sequelize:db , modelName: "player_data"
})

module.exports = PlayerData