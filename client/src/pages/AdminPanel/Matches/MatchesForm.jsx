import React, { useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";
import { getMatchesByPhaseAndMatch } from "./MatchesFunctions.ts";
import { useSelector } from "react-redux";
import axios from 'axios';

function TeamsForm({ row, i, setMatches, actualTournament }) {

  const [showModal, setShowModal] = React.useState(false);
  const [matchTeams,setMatchTeams] = React.useState([])
  const [teamA, setTeamA] = React.useState()
  const [teamB, setTeamB] = React.useState()

  const phase = useSelector(state => state.phase)


  const setData = async (e) => {
    e.preventDefault()
    // const setMatches = await getMatchesByPhaseAndMatch({ tournamentId: actualTournament, fase: phase, matchId: row.id}).then((data) => setMatchTeams(data))
    const setNameA = await axios.get(`/api/team/${matchTeams[0].teamId}`).then((res) => setTeamA(res.data))
    const setNameB = await axios.get(`/api/team/${matchTeams[1].teamId}`).then((res) => setTeamB(res.data))
    const showModal = await setShowModal(true)
  }

  useEffect(() => {
    getMatchesByPhaseAndMatch({ tournamentId: actualTournament, fase: phase, matchId: row.id}).then((data) => setMatchTeams(data))
  },[])

  // console.log(matchTeams)
  // console.log(teamA.name)
  console.log(teamA)

  return (
    <>
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{row.id}</TableCell>
        {row.date ? (
          <TableCell align="center">
            <span className="font-bold text-green-600">{row.date}</span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-red-500">Set Date</span>
          </TableCell>
        )}

        {row.winner ? (
          <TableCell align="center">
            <span className="font-bold text-green-600">{row.winner}</span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-blue-500">Set a Winner</span>
          </TableCell>
        )}

        {row.match_end ? (
          <TableCell align="center">
            <span className="font-bold text-green-600">Finished</span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-yellow-500">in course</span>
          </TableCell>
        )}

        <TableCell align="center">
          <MenuItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={setData}
          >
            <BorderColorIcon color="primary" />
          </MenuItem>
        </TableCell>
      </TableRow>

      {/* popUp */}
      {showModal ? (
        <EditModal
          row={row}
          setShowModal={setShowModal}
          setMatches={setMatches}
          actualTournament={actualTournament}
          matchTeams={matchTeams}
          teamA={teamA}
          teamB={teamB}
        />
      ) : null}
    </>
  );
}

export default TeamsForm;
