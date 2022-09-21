import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";

import {deleteTeam, getTeams} from "./TeamsFunctions.ts";


function TeamsForm({ row, i , setTeams }) {


  const [showModal, setShowModal] = React.useState(false);

  const handleDelete = async (tournament) => {
    const deleteT = await deleteTeam(tournament)
    const getall = await getTeams().then((data) => setTeams(data));
  };
  
  return (
    <>
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center" >
          <img alt="" src={row.logo} />
        </TableCell>
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
          setTeams={setTeams}
        />
      ) : null}
    </>
  );
}

export default TeamsForm;
