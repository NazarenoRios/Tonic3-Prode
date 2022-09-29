import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";

import { deleteNotification, getNotifications } from "./NotificationsFunctions.ts";


function NotificationsForm({ row, i , setNotifications }) {


  const [showModal, setShowModal] = React.useState(false);

  const handleDelete = async (row) => {
    const deleteT = await deleteNotification(row)
    const getall = await getNotifications().then((data) => setNotifications(data));
  };

  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "October",
    "Novr",
    "Dec",
  ];

  const date = new Date(row.date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const mins = date.getMinutes();
  
  return (
    <>
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">{row.id}</TableCell>
        <TableCell align="center">{row.tittle}</TableCell>
        <TableCell align="center">{row.body}</TableCell>
        <TableCell align="center">
            <span className="font-medium text-green-600">
              {day} {monthNames[month]} of {year} - {hours}:
              {mins === 0 ? "00" : mins}hs
            </span>
          </TableCell>
          <TableCell align="center">Usuarios</TableCell>
        <TableCell align="center">
          <MenuItem sx={{ display: "flex", justifyContent: "center" }} onClick={() => setShowModal(true)}>
            <BorderColorIcon color="primary" />
          </MenuItem>
        </TableCell>
        <TableCell align="center">
          <MenuItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => handleDelete(row)}
          >
            <DeleteIcon className="text-red-500" />
          </MenuItem>
        </TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>

      {/* popUp */}
      {showModal ? (
        
        <EditModal
          row={row}
          setShowModal={setShowModal}
          setNotifications={setNotifications}
        />
      ) : null}
    </>
  );
}

export default NotificationsForm;
