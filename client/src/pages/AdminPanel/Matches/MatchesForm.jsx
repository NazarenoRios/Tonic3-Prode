import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";
import axios from "axios";

function TeamsForm({ row, i , setTeams }) {


  const [showModal, setShowModal] = React.useState(false);
  const [teamName, setTeamName] = useState()

  useEffect(() => {
    axios.get(`/api/team/${row.teamId}`).then(res => setTeamName(res.data.name))
  },[])

  return (
    <>
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{row.matchId}</TableCell>
        <TableCell align="center">{teamName ? teamName : row.teamId}</TableCell>
        <TableCell align="center">{row.goals}</TableCell>
        <TableCell align="center">{row.winner}</TableCell>
        <TableCell align="center">
          <MenuItem sx={{ display: "flex", justifyContent: "center" }} onClick={() => setShowModal(true)}>
            <BorderColorIcon color="primary" />
          </MenuItem>
        </TableCell>
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
