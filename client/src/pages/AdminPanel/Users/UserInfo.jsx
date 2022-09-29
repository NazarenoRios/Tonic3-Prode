import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Header } from "../../../components/AdminPanel";

import axios from 'axios'

function UserInfo() {

  const { id } = useParams();

  const [data,setData] = useState([])

  useEffect(() => {
    axios.get(`/metrics/tournament_summary/${id}`).then(res => setData(res.data.tournaments[0][1]))
  },[data.length])


  function createData(matchId, match_phase, winner_name, logo, last_vote) {
    return { matchId, match_phase, winner_name, logo, last_vote };
  }

  const rows = data?.map((info, i) =>
    createData(
        info.matchId,
        info.match_phase,
        info.winner_name,
        info.logo,
        info.last_vote,
    )
  );


  return (
    <>
      <div className="flex justify-between">
        <Header title="User" />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Match ID</TableCell>
              <TableCell align="center">Phase&nbsp;</TableCell>
              <TableCell align="center">Team Voted&nbsp;</TableCell>
              <TableCell align="center">at&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row,i) => (
            <TableRow>
                <TableCell align="center">{row.matchId}</TableCell>
                <TableCell align="center">{row.match_phase}</TableCell>
                <TableCell align="center">{row.winner_name}</TableCell>
                <TableCell align="center">{row.last_vote}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UserInfo;
