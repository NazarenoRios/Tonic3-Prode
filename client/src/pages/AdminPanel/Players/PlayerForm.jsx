import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";

import { deletePlayer, getPlayers } from "./PlayersFunctions.ts";


function PlayerForm({ row, i , setPlayers }) {


  const [showModal, setShowModal] = React.useState(false);

  const handleDelete = async (row) => {
    const deleteT = await deletePlayer(row)
    const getall = await getPlayers().then((data) => setPlayers(data));
  };
  
  return (
    <>
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">{row.id}</TableCell>
        <TableCell align="center">{row.fullname}</TableCell>
        <TableCell align="center">{row.age}</TableCell>
        <TableCell align="center"><img alt="" src={row.logo} /></TableCell>
        <TableCell align="center">{row.info}</TableCell>
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
          setPlayers={setPlayers}
        />
      ) : null}
    </>
  );
}

export default PlayerForm;
