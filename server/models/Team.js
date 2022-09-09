const S = require("sequelize")
const db = require("../config/db")

class Team extends S.Model { }

Team.init({
      name : {
        type : S.STRING,
        allowNull: false,
        unique: true
      },
      logo : {
        type : S.STRING
      },
      info : {
        type : S.TEXT
      },
      state : {
        type : S.BOOLEAN,
        defaultValue: false,
      }
}, { sequelize: db, modelName: "team" })





module.exports = Team
