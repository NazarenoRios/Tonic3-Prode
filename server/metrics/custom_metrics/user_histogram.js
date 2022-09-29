const { validateToken } = require("../../config/tokens");
const { Team, Match } = require("../../models");
const set_dir = require("../utils");
const { parse_date } = require("../utils/init_date");
const { save_data } = require("../utils/save_data");
const { inc_participants } = require("./participants_counter");

const find_user_ix = (id, prop, data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i][prop])
    if (data[i][prop] == id) return i;
  }
};
const find_prop_ix = (id, data) => {
  for (let i = 0; i < data.length; i++) {
   for(let propiedad in data[i] ){
      if (propiedad == id) return i;
    }
  }
}
module.exports = {
  set_data: async (payload) => {
    const { day, hours, mins } = parse_date(new Date());
    const register_dir = set_dir("users_histogram", []);
    const { data, dir } = register_dir;
    const { userId, matchId, tournamentId, winner_id } = payload;
    const {name,logo}=await Team.findByPk(winner_id)
    const {fase}=await Match.findByPk(matchId)
    inc_participants(fase)
    const user_ix = find_user_ix(userId,"userId" ,data);
    if (!user_ix && user_ix !==0) {
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
                last_vote: `day ${day}, ${hours}hs ${mins}min`,
              },
            ],
          },
        ],
      });
      return save_data(dir, data);
    }
    const tournament_ix = find_prop_ix(
      tournamentId,
      data[user_ix].tournaments
    );
    console.log(tournament_ix,'AWDASD0AWD239I90AQWEKPAOKDOIAWJMDOPASDL,AWDLAÑSÑD')
    if (!tournament_ix && tournament_ix !==0) {
      data[user_ix].tournaments.push({
          
            [tournamentId]: [
              {
                matchId,
                winner_name:name,
                match_phase:fase,
                logo,
                last_vote: `day ${day}, ${hours}hs ${mins}min`,
              },
            ],
          
      });
      return save_data(dir, data);
    }
    const match_ix = find_user_ix(matchId, "matchId", data[user_ix].tournaments[tournament_ix][tournamentId])
    if(!match_ix && match_ix !==0 ){
        data[user_ix].tournaments[tournament_ix][tournamentId].push( {
            matchId,
            winner_name:name,
            match_phase:fase,
            logo,
            last_vote: `day ${day}, ${hours}hs ${mins}min`,
          })
          return save_data(dir, data);
    }
    data[user_ix].tournaments[tournament_ix][match_ix].winner_name=name
    data[user_ix].tournaments[tournament_ix][match_ix].logo=logo
    return save_data(dir,data)
  }
};