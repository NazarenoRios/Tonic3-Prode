const { Op } = require("sequelize");
const {
  Tournament,
  Tournament_teams,
  Data_match,
  Match,
  Points,
  Bet,
} = require("../models");
const AwardSevices = require("./award.services");

class TournamentServices {
  static async createTournament(body) {
    try {
      return await Tournament.create(body);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllTournament() {
    try {
      const tournaments = await Tournament.findAll();
      if (tournaments) return tournaments;
      if (!tournaments) return false;
    } catch (error) {
      console.log(error);
    }
  }

  static async findByid(id) {
    try {
      return await Tournament.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  }

  static async findByName(name) {
    try {
      return await Tournament.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async modifyTournament(
    tournament,
    { name, logo, description, participants, state }
  ) {
    try {
      tournament.name = name;
      tournament.logo = logo;
      tournament.description = description;
      tournament.participants = participants;
      tournament.state = state;
      return await tournament.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async addTeam(idTournament, idTeam) {
    try {
      return await Tournament_teams.create({
        teamId: idTeam,
        tournamentId: idTournament,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async endTournament(id) {
    try {
      const tournament = await TournamentServices.findByid(id);
      if (!tournament.state) {
        tournament.state = true;
        tournament.save();
        await AwardSevices.sendAward(id);
        return "end of the tournament";
      }
      if (tournament.state) {
        tournament.state = false;
        tournament.save();
        return "tournament starts again";
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteTournament(id) {
    try {
      const tournament_points = await Points.findAll({
        where: { tournamentId: id },
      });
      const tournament_bets = await Bet.findAll({
        where: { tournamentId: id },
      });
      const tournament_matches = await Match.findAll({
        where: { tournamentId: id },
      });
      const data_matches =tournament_matches.forEach(async (match) => {
        await Data_match.findAll({
          where: { matchId: match.id },
        });
        await match.destroy();
        return await data_matches;
      });
      console.log(data_matches, tournament_bets);
      if (Array.isArray(tournament_matches))
      await tournament_points.forEach(async(tournament_point) =>
      await tournament_point.destroy()
      );
      
     if (Array.isArray(data_matches))await data_matches.forEach(async (data_match_tournament) =>{
        console.log(data_matches,data_match_tournament)
        await data_match_tournament.destroy()}
        );
      //if(tournament_matches)tournament_matches.map(match=>match.destroy())
      if (tournament_bets.length)await tournament_bets.forEach(async(tournament_bet) => tournament_bet.destroy());
      return await Tournament.destroy({ where: { id } });
    } catch (error) {
      return console.log(error);
    }
  }
}

module.exports = TournamentServices;
