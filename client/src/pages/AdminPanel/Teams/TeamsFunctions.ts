import axios from "axios";

export {};

//get tournaments

export function getTeams() {
  return axios
    .get("/api/team/all")
    .then((res) => res.data)
    .then((data) => {
      return {
        count: data.length,
        result: data,
      };
    });
}

//add tournament
export function addTeam({ team }) {
  return axios.post("/api/team/create", team);
}

//edit tournament
export function editTeam({ id, team }) {
  console.log(team)
  return axios.put(`/api/team/modify/${id}`,{name: team.name, logo: team.logo, info: team.info, participants: false});
}

//delete tournament
export function deleteTeam({id}) {
  return axios.delete(`/api/team/${id}`)
}