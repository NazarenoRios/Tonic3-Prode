import axios from "axios";

export {};

// /api/notification/all

// /api/notification/create

// /api/notification/modify/:id

// /api/notification/delete/:id

//get notification

export function getNotifications() {
  return axios.get("/api/notification/all").then((res) => res.data);
}

//add notification
export function addNotification({ title, info, selectedDate }) {
  return axios.post("/api/notification/create", {
    tittle: title.value,
    body: info.value,
    date: selectedDate,
  });
}

//edit notification
export function editNotification({title, info, selectedDate, notification}) {
  return axios.put(`/api/notification/modify/${notification.id}`, {
    tittle: title,
    body: info,
    date: selectedDate,
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
