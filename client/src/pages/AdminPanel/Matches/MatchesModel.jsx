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
import { setActualPhase } from "../../../state/phase";
import { useTranslation } from "react-i18next";

export default function TeamsModel() {

  const [matches, setMatches] = React.useState([]);
  const [phases, setPhases] = React.useState([]);
  const [actualTournament, setActualTournament] = React.useState();
  const [tournaments,setTournaments] = React.useState()

  const dispatch = useDispatch()
  const phase = useSelector(state => state.phase)

  React.useEffect(() => {
    getTournaments().then(data => setTournaments(data))
  }, []);

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

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <Header title={t("Matches")} />
      <select
        defaultValue={"select tournament"}
        className="mb-8 rounded p-3"
        onChange={(e) => getPhases(e)}
      >
        <option disabled value={"select tournament"}>
        {t("SelectTournament")}
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
        {t("SelectPhase")}
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
              <TableCell align="center">{t("Match")}</TableCell>
              <TableCell align="center">{t("Date")}&nbsp;</TableCell>
              <TableCell align="center">{t("TeamA")}&nbsp;</TableCell>
              <TableCell align="center">{t("TeamB")}&nbsp;</TableCell>
              <TableCell align="center">{t("Winner")}&nbsp;</TableCell>
              <TableCell align="center">{t("Edit")}&nbsp;</TableCell>
              <TableCell align="center">{t("SetWinner")}&nbsp;</TableCell>
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
