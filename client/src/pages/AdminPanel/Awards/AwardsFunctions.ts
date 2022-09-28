import axios from "axios";

export {};

//get award

export function getAwards() {
  return axios.get("/api/award/all").then((res) => res.data);
}

//add award
export function addAward({ name, img, info, country, place }) {
  return axios.post("/api/award/create", {
    name: name.value,
    img: img.value,
    info: info.value,
    country: country.value,
    place: place.value,
  });
}

//edit award
export function editAward({name, img, info, country, place, award}) {
  return axios.put(`/api/award/modify/${award.id}`, {
    name: name,
    img: img,
    info: info,
    country: country,
    place: place,
  });
}

//delete award
export async function deleteAward(row) {
  try {
    const res = await axios.delete(`/api/award/${row.id}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
}
