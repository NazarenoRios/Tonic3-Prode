import React, { useEffect, useLayoutEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";
import axios from "axios";

function TeamsForm({ row, i, setTeams , teamName }) {
  const [showModal, setShowModal] = React.useState(false);
  

  // useEffect( () => {
  //     axios.get(`/api/team/${row.teamId}`).then((res) => setTeamName(res.data.name));
  // }, []);

  // const changeToName = async () => {
  //   const
  // }

  // useEffect(() => {
  //   axios.get(`/api/team/${row.teamId}`).then((res) => setTeamName(res.data.name));
  //   setRerender(false);
  // },[])

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
              {teamName}
            </span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-red-500">Set a Team</span>
          </TableCell>
        )}

        {row.goals ? (
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
        <EditModal row={row} setShowModal={setShowModal} setTeams={setTeams} />
      ) : null}
    </>
  );
}

export default TeamsForm;
