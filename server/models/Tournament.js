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
      matches : {
        type : S.STRING
      },
      state : {
        type : S.INTEGER
      }
}, { sequelize: db, modelName: "tournament" })





module.exports = Tournament
