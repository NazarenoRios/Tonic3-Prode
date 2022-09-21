const User = require("../models/User");
const Tournament = require("../models/Tournament");
const Team = require("../models/Team");
const Player = require("../models/Player");
const Match = require("../models/Match");
const Data_match=require('./Data_match')
const Tournament_teams = require("./Tournament_teams")
const PlayerData = require("./Player_data")
const Bet = require("./Bet")
const Points = require("./Points")

User.hasMany(Tournament);
Team.hasMany(Player);
Player.belongsTo(Team);

Team.belongsToMany(Tournament, { through: "tournament_teams" });
Tournament.belongsToMany(Team, { through: "tournament_teams" });

Player.belongsToMany(Data_match, { through: "player_data" });
Data_match.belongsToMany(Player, { through: "player_data" });

User.belongsToMany(Match,{as : "userId",through : "bet"})
Match.belongsToMany(User,{as : "matchId",through : "bet"})

User.belongsToMany(Tournament,{as : "user",through: "point"})
Tournament.belongsToMany(User,{as : "tournament",through : "point"})


Team.belongsToMany(Match,{as:'matchID',through:"data_match"})
Match.belongsToMany(Team,{as:'teamID',through:"data_match"})
Data_match.belongsTo(Match)
Match.belongsTo(Tournament);


module.exports = { User,Tournament,Team,Player,Match ,Data_match, Tournament_teams, PlayerData, Bet, Points };