import axios from "axios";

export {};

//get teams

export function getTeams() {
  return axios
    .get("/api/team/all")
    .then((res) => res.data)
}

//add team
export function addTeam({name,logo,info,state}) {
  return axios.post("/api/team/create", {name: name.value, logo: logo.value, info:info.value, state:state.value});
}

//edit team
export function editTeam({ name, logo, info, state, team }) {
  console.log(team)
  return axios.put(`/api/team/modify/${team.id}`,{name: name, logo: logo, info: info, state: state});
}

//delete team
export function deleteTeam(team) {
  return axios.delete(`/api/team/${team.id}`)
}

//get tournaments

export function getTournaments() {
  return axios
    .get("/api/tournament/all")
    .then((res) => res.data)
    .then((data) => {
      return {
        count: data.length,
        result: data,
      };
    });
}

//add team to tournament

export function addTeamToTournament ({idTournament}) {
  return axios
    .post(`/api/tournament/teams/${idTournament}`)
}