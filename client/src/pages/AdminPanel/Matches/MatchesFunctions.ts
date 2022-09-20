import axios from "axios";

export {};

//get tournaments

export function getTournaments() {
  return axios
    .get("/api/tournament/all")
    .then((res) => res.data)
}

//get matches

export function getMatches({tournamentId}) {
  return axios
    .get(`api/matches_data/get_data/${tournamentId}`)
    .then((res) => {
      return res.data
    })
}

//get teams

export function getTeams() {
  return axios
    .get("/api/team/all")
    .then((res) => res.data)
}

//get matches by Phase

export function getMatchesByPhase({tournamentId,fase}) {
  return axios
    .get(`api/matches_data/get_data/${tournamentId}/${fase}`)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
}

export function getMatchesByPhaseAndMatch({tournamentId,fase,matchId}) {
  return axios
    .get(`api/matches_data/get_data/${tournamentId}/${fase}/${matchId}`)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
}


//add team to match 

export function addTeamToMatch(matchInfo) {

  return axios
    .put(`api/matches_data/add_team`,matchInfo)
}


//add team to tournament

export function addTeamToTournament ({idTournament}) {
  return axios
    .post(`/api/tournament/teams/${idTournament}`)
}