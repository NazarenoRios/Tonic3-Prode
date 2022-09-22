import React, { useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";
import { getMatchesByPhaseAndMatch } from "./MatchesFunctions.ts";
import { useSelector } from "react-redux";
import axios from "axios";

// Icons
// import EditIcon from "@material-ui/icons/EditOutlined";
// import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
// import RevertIcon from "@material-ui/icons/NotInterestedOutlined";

function TeamsForm({ row, i, setMatches, actualTournament }) {
  const [showModal, setShowModal] = React.useState(false);
  const [matchTeams, setMatchTeams] = React.useState([]);

  const [teamA, setTeamA] = React.useState();
  const [teamB, setTeamB] = React.useState();
  const [teamAGoals,setTeamAGoals]= React.useState()
  const [teamBGoals,setTeamBGoals]= React.useState()

  const phase = useSelector((state) => state.phase);

  useEffect(() => {
    if (phase) {
      getMatchesByPhaseAndMatch({ tournamentId: actualTournament, fase: phase, matchId: row.id,})
    .then((data) => {
      setMatchTeams(data);

      setTeamAGoals(data[0].goals)
      setTeamBGoals(data[1].goals)

      axios.get(`/api/team/${data[0].teamId}`).then((res) => setTeamA(res.data));
      axios.get(`/api/team/${data[1].teamId}`).then((res) => setTeamB(res.data));
    });
    }
  }, [row.id]);

  const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sep", "October", "Novr", "Dec"
  ];

  const date = new Date(row.date)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()
  const hours = date.getHours()
  const mins = date.getMinutes()
  


  return (
    <>
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{row.id}</TableCell>
        {row.date ? (
          <TableCell align="center">
            <span className="font-bold text-green-600">{day} {monthNames[month]} of {year} - {hours}:{mins === 0 ? "00" : mins}hs</span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-red-500">Set Date</span>
          </TableCell>
        )}


        {teamA ? (
          <TableCell align="center">
            <span className="font-bold text-green-600">{teamA.name} - </span> <span className="font-bold text-blue-600">({teamAGoals})</span>
          </TableCell>
        ) : (
          <TableCell align="center"><span className="text-red-500">Set a Team</span></TableCell>
        )}
        {teamB ? (
          <TableCell align="center">
          <span className="font-bold text-green-600">{teamB.name}</span> <span className="font-bold text-blue-600">({teamBGoals})</span>
        </TableCell>
        ) : (
          <TableCell align="center"><span className="text-red-500">Set a Team</span></TableCell>
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

        {/* {row.match_end ? (
          <TableCell align="center">
            <span className="font-bold text-green-600">Finished</span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-yellow-500">in course</span>
          </TableCell>
        )} */}

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
        <EditModal
          row={row}
          setShowModal={setShowModal}
          setMatches={setMatches}
          actualTournament={actualTournament}
          matchTeams={matchTeams}
          teamA={teamA}
          teamB={teamB}
          teamAGoals={teamAGoals}
          teamBGoals={teamBGoals}
        />
      ) : null}
    </>
  );
}

export default TeamsForm;
