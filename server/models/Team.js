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
      matches : {
        type : S.STRING
      },
      state : {
        type : S.INTEGER
      }
}, { sequelize: db, modelName: "team" })





module.exports = Team
