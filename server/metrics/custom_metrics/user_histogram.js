const { validateToken } = require("../../config/tokens");
const { Team, Match } = require("../../models");
const set_dir = require("../utils");
const { parse_date } = require("../utils/init_date");
const { save_data } = require("../utils/save_data");

const find_user_ix = (id, prop, data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[prop] === id) return i;
  }
};
module.exports = {
  set_data: async (payload) => {
    const { day, hours, mins } = parse_date(new Date());
    const register_dir = set_dir("users_histogram", []);
    const { data, dir } = register_dir;
    const { userId, matchId, tournamentId, winner_id } = payload;
    const {name,logo}=await Team.findByPk(winner_id)
    const {fase}=await Match.findByPk(matchId)
    const user_ix = find_user_ix(userId, "userId", data);
    if (!user_ix) {
      data.push({
        userId,
        tournaments: [
          {
            [tournamentId]: [
              {
                matchId,
                winner_name:name,
                logo,
                match_phase:fase,
                last_vote: [{ day, hours, mins }],
              },
            ],
          },
        ],
      });
      return save_data(dir, data);
    }
    
    const tournament_ix = find_user_ix(
      tournamentId,
      "tournamentId",
      data[user_ix].tournaments
    );
    if (!tournament_ix) {
      data[user_ix].tournaments.push({
        [tournaments]: [
          {
            tournamentId: [
              {
                matchId,
                winner_name:name,
                logo,
                last_vote: [{ day, hours, mins }],
              },
            ],
          },
        ],
      });
      return save_data(dir, data);
    }
    const match_ix = find_user_ix(matchId, "matchId", data[user_ix].tournament[tournament_ix])
    if(!match_ix){
        data[user_ix].tournaments[tournament_ix].push( {
            matchId,
            winner_name:name,
            logo,
            votes_updates_date: [{ day, hours, mins }],
          })
          return save_data(dir, data);
    }
    data[user_ix].tournaments[tournament_ix][match_ix].winner_name=name
    data[user_ix].tournaments[tournament_ix][match_ix].logo=logo
    data[user_ix].tournaments[tournament_ix][match_ix].last_vote.push({day,hours,mins})
    return save_data(dir,data)
  }
};
