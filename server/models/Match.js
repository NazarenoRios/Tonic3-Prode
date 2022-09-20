const db = require("../config/db");
const S = require("sequelize");
const Data_match = require("./Data_match");
const Bet = require("./Bet");
const PointsServices = require("../services/points.services");

class Match extends S.Model {}
Match.init(
  {
    date: {
      type: S.DATE,
    },
    winner: {
      //WINNER VA A SER TEAM_ID DEL EQUIPO GANADOR
      type: S.INTEGER,
    },
    info: {
      type: S.TEXT,
    },
    match_end: {
      type: S.BOOLEAN,
    },
    fase: {
      type: S.INTEGER,
    },
    number_key: {
      type: S.INTEGER,
    },
    next: {
      type: S.INTEGER,
    },
  },
  { sequelize: db, modelName: "match" }
);

Match.addHook("afterBulkCreate", (matches) => {
  let matches_id = [];
  matches.forEach((match) => {
    for (let i = 0; i < 2; i++) matches_id.push({ matchId: match.id });
  });
  Data_match.bulkCreate(matches_id);
});

Match.addHook("afterUpdate", async (match) => {
  if (match.winner != null) {
    const bets = await Bet.findAll();
    bets.map(async (bet) => {
      if (bet.winner_id === match.winner) {
        const point = await PointsServices.getTournamentPoints(bet.userId,match.tournamentId);
        point.points = point.points + 1;
        point.save();
      }
    });

    // const dataMatch = await Data_match.findOne({ where:{matchId : match.next} })
    // dataMatch.teamId=match.winner
    // dataMatch.save()
    // console.log(dataMatch);
  }
});

module.exports = Match;
