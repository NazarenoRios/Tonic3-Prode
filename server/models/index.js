const User = require("../models/User");
const Tournament = require("../models/Tournament");
const Team = require("../models/Team");
const Player = require("../models/Player");
const Match = require("../models/Match");

User.hasMany(Tournament);
//Tournament.hasMany(Team)
Team.hasMany(Player);
Player.belongsTo(Team);

Team.belongsToMany(Tournament, { through: "tournamentTeams" });
Tournament.belongsToMany(Team, { through: "tournamentTeams" });

Team.hasOne(Match, { as: "HomeTeam", foreignKey: "homeTeamId" });
Team.hasOne(Match, { as: "AwayTeam", foreignKey: "awayTeamId" });

Match.belongsTo(Team);

module.exports = { User };
