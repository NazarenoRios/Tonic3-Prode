import axios from "axios";

export {};

//get tournaments

export function getTournaments() {
  return axios.get("/api/tournament/all").then((res) => res.data);
}

//add tournament
export function addTournament({
  name,
  logo,
  description,
  participants,
  phase,
  state,
}) {
  return axios.post("/api/tournament/create", {
    name: name.value,
    logo: logo.value,
    description: description.value,
    participants: participants.value,
    phase: phase,
    state: state.value,
  });
}

//edit tournament
export function editTournament({tournament,name,logo,description,participants,phase,state}) {
  return axios.put(`/api/tournament/modify/${tournament.id}`, {
    name: name,
    logo: logo,
    description: description,
    participants: participants,
    phase: phase,
    state: state
  });
}

//delete tournament
export async function deleteTournament(tournament) {
  try {
    const res = await axios.delete(`/api/tournament/${tournament.id}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
}
