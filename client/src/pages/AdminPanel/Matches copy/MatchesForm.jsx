import React, { useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";
import axios from "axios";

function TeamsForm({ row, i, setMatches, actualTournament }) {

  const [showModal, setShowModal] = React.useState(false);
  const [teamName,setTeamName] = React.useState()
  
  useEffect( () => {
    axios.get(`/api/team/${row.teamId}`).then((res) => setTeamName(res.data.name));
  }, []);

  console.log(row.goals)

  return (
    <>
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{row.matchId}</TableCell>
        {row.teamId ? (
          <TableCell align="center">
            <span className="font-bold text-green-600">
              {teamName ? teamName : row.teamId}
            </span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-red-500">Set a Team</span>
          </TableCell>
        )}

        {row.goals !== null ? (
          <TableCell align="center">
            <span className="font-bold text-green-600">{row.goals}</span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-red-500">Set Goals</span>
          </TableCell>
        )}
        {/* <TableCell align="center">{row.winner}</TableCell> */}
        <TableCell align="center">
          <MenuItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => setShowModal(true)}
          >
            <BorderColorIcon color="primary" />
          </MenuItem>
        </TableCell>
      </TableRow>

      {/* popUp */}
      {showModal ? (
        <EditModal row={row} setShowModal={setShowModal} setMatches={setMatches} actualTournament={actualTournament} />
      ) : null}
    </>
  );
}

export default TeamsForm;
