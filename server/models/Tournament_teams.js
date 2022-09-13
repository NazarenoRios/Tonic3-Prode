const S = require("sequelize")
const db = require("../config/db")

class TournamentTeams extends S.Model{}

TournamentTeams.init({},{
    sequelize:db , modelName: "tournament_teams"
})

module.exports = TournamentTeams