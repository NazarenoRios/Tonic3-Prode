import axios from "axios";

export {};

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

//add tournament
export function addTournament({ tournament }) {
  console.log(tournament)
  return axios.post("/api/tournament/create", tournament);
}

//edit tournament
export function editTournament({ id, tournament }) {
  console.log(tournament);
  return axios.put(`/api/tournament/modify/${id}`, {
    name: tournament.name,
    logo: tournament.logo,
    description: "ASD",
    participants: tournament.participants,
    phase: tournament.phase
  });
}

//delete tournament
export function deleteTournament({ id }) {
  return axios.delete(`/api/tournament/${id}`);
}
