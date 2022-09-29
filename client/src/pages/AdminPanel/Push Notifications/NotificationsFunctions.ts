import axios from "axios";

export {};

export function getNotifications() {
  return axios.get("/api/notification/all").then((res) => res.data);
}

//add notification
export function addNotification({ title, info, selectedDate, userSelected }) {
  return axios.post("/api/notification/create", {
    tittle: title.value,
    body: info.value,
    date: selectedDate,
    userId: userSelected.value,
  });
}

//edit notification
export function editNotification({title, info, selectedDate, userSelected , notification}) {
  return axios.put(`/api/notification/modify/${notification.id}`, {
    tittle: title,
    body: info,
    date: selectedDate,
    userId: userSelected,
  });
}

//delete notification
export async function deleteNotification(row) {
  try {
    const res = await axios.delete(`/api/notification/delete/${row.id}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
}


//get users
export function getUsers() {
  return axios.get("/api/user/").then((res) => res.data);
}