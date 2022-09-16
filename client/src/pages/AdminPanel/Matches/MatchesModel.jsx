import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import { Header } from "../../../components/AdminPanel";
import MatchesForm from "./MatchesForm";
import { getTournaments, getMatchesByPhase, getMatchesByPhaseAndMatch } from "./MatchesFunctions.ts";
// import { getMatchesByPhaseAndMatch } from "./MatchesFunctions";

export default function TeamsModel() {

  const [matches, setMatches] = React.useState([]);
  const [tournaments, setTournaments] = React.useState([]);
  const [phases,setPhases] = React.useState([])

  const [actualTournament,setActualTournament] = React.useState()
  const [actualPhase,setActualPhase] = React.useState()
  

  React.useEffect( () => {
    getTournaments().then((data) => setTournaments(data))
  }, []);


  function createData( matchId, teamId, goals, winner) {
    return { matchId, teamId, goals, winner };
  }

  const rows = matches.map((team, i) =>
    createData(
      team.matchId,
      team.teamId,
      team.goals,
      team.winner,
    )
  );

  const getPhases = (e) => {
    e.preventDefault()
    tournaments.map((tournament) => setPhases(tournament.phase))
    setActualTournament(e.target.value)
  }

  const getMbyPhase = (e) => {
    e.preventDefault()
    setActualPhase(e.target.value)
    getMatchesByPhase({tournamentId: actualTournament, fase: e.target.value}).then(data => setMatches(data))
  }

  // const getMbyPhase = (e) => {
  //   e.preventDefault()
  //   setActualPhase(e.target.value)
  //   // getMatchesByPhase({tournamentId: actualTournament, fase: e.target.value}).then(data => setMatches(data))
  // }

  // const getMbyPhaseAndMatch = (e) => {
  //   e.preventDefault()
  //   getMatchesByPhaseAndMatch({tournamentId: actualTournament, fase: actualPhase, matchId: e.target.value }).then(data => setMatches(data))
  // }


  return (
    <>
      <Header title="Matches" />
      <select className="mb-8 rounded p-3" onClick={getPhases}>
        <option selected disabled value="">Select Tournament</option>
        {tournaments.map((tournament,i) => (
          <option key={i} value={tournament.id} >{tournament.name}</option>
        ))}
      </select>

          <br></br>

      <select className="mb-8 rounded p-3" onClick={getMbyPhase}>
        <option selected disabled value="">Select Phase</option>
        {phases.map((phase,i) => (
          <option key={i} value={phase} >Phase {phase}</option>
        ))}
      </select>

      {/* <br></br>

      <select className="mb-8 rounded p-3" onClick={getMbyPhaseAndMatch}>
        <option selected disabled value="">Select Match</option>
        {phases.map((phase,i) => (
          <option key={i} value={phase} >Match {phase}</option>
        ))}
      </select> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Match</TableCell>
              <TableCell align="center">Team&nbsp;</TableCell>
              <TableCell align="center">Goals&nbsp;</TableCell>
              <TableCell align="center">Winner&nbsp;</TableCell>
              <TableCell align="center">Edit&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <MatchesForm row={row} key={i} setMatches={setMatches} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
