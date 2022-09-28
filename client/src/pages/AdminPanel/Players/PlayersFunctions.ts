import axios from "axios";

export {};

//get players
export function getPlayers() {
  return axios.get("/api/player/all").then((res) => res.data);
}

//add player
export function addPlayer({fullname,age,img,info}) {
  return axios.post("/api/player/create", {
    fullname: fullname.value,
    age: age.value,
    img: img.value,
    info: info.value,
  });
}

//edit player
export function editPlayer({player,fullname,age,img,info}) {
  return axios.put(`/api/player/modify/${player.id}`, {
    fullname: fullname,
    age: age,
    img: img,
    info: info,
  });
}

//delete player
export async function deletePlayer(row) {
  try {
    const res = await axios.delete(`/api/player/${row.id}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
}
