import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";

import { getTournaments, deleteTournament } from "./TournamentFunctions.ts";


function TournamentForm({ row, i , setTournaments }) {


  const [showModal, setShowModal] = React.useState(false);

  const handleDelete = async (tournament) => {
    const deleteT = await deleteTournament(tournament)
    const getall = await getTournaments().then((data) => setTournaments(data));
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
        <TableCell align="center">
          <img alt="" src={row.logo} />
        </TableCell>
        <TableCell align="center">{row.description}</TableCell>
        <TableCell align="center">{row.participants}</TableCell>
        <TableCell align="center">{row.phase}</TableCell>
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
          setTournaments={setTournaments}
        />
      ) : null}
    </>
  );
}

export default TournamentForm;
