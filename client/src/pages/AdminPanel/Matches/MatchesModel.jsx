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
import {  getTournaments, getMatchesByPhase } from "./MatchesFunctions.ts";
import { useDispatch, useSelector } from "react-redux";
import { setTournament2 } from "../../../state/tournaments";
import { setActualPhase } from "../../../state/phase";

export default function TeamsModel() {

  const [matches, setMatches] = React.useState([]);
  const [phases, setPhases] = React.useState([]);
  const [actualTournament, setActualTournament] = React.useState();

  const dispatch = useDispatch()
  const tournaments = useSelector(state => state.tournament)
  const phase = useSelector(state => state.phase)

  React.useEffect(() => {
    getTournaments().then((data) => dispatch(setTournament2(data)));
  }, []);

  // function createData( id ,date, winner, match_end, number_key) {
  //   return { id , date, winner, match_end, number_key };
  // }

  // const rows = matches.map((team) =>
  //   createData( team.id , team.date, team.winner, team.match_end, team.number_key)
  // );


  const getPhases = (e) => {
    e.preventDefault();
    setActualTournament(e.target.value)
    const setP = tournaments.filter(
      (tournament) =>
        tournament.id.toString().toLowerCase() === e.target.value.toLowerCase()
    );
    setPhases([...setP[0].phase]);
  };

  const getMbyPhase = (e) => {
    e.preventDefault();
    dispatch(setActualPhase(e.target.value))
    getMatchesByPhase({ tournamentId: actualTournament, fase: e.target.value,
    }).then((data) => setMatches(data));
  };

  
  return (
    <>
      <Header title="Matches" />
      <select
        defaultValue={"select tournament"}
        className="mb-8 rounded p-3"
        onChange={(e) => getPhases(e)}
      >
        <option disabled value={"select tournament"}>
          Select Tournament
        </option>
        {tournaments?.map((tournament, i) => (
          <option key={i} value={tournament.id}>
            {tournament.name}
          </option>
        ))}
      </select>

      <br></br>

      <select className="mb-8 rounded p-3" onChange={getMbyPhase}>
        <option selected disabled value="">
          Select Phase
        </option>
        {phases?.map((phase, i) => (
          <option key={i} value={phase}>
            Phase {phase}
          </option>
        ))}
      </select>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Match</TableCell>
              <TableCell align="center">Date&nbsp;</TableCell>
              <TableCell align="center">Team A&nbsp;</TableCell>
              <TableCell align="center">Team B&nbsp;</TableCell>
              <TableCell align="center">Winner&nbsp;</TableCell>
              <TableCell align="center">Edit&nbsp;</TableCell>
              <TableCell align="center">Set Winner&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((row, i) => (
              <MatchesForm row={row} key={i} setMatches={setMatches} actualTournament={actualTournament} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
