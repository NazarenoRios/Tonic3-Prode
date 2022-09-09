const S = require("sequelize")
const db = require("../config/db")

class Tournament extends S.Model { }

Tournament.init({
      name : {
        type : S.STRING,
        allowNull: false,
      },
      logo : {
        type : S.STRING
      },
      description : {
        type : S.TEXT
      },
      participants : {
        type: S.INTEGER
      },
      phase : {
        type: S.INTEGER
      },
      state : {
        type : S.BOOLEAN,
        defaultValue : false
      }
}, { sequelize: db, modelName: "tournament" })





module.exports = Tournament
