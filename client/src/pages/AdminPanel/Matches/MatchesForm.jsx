import React, { useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckIcon from "@mui/icons-material/Check";
import { MenuItem } from "@mui/material";

import EditModal from "./EditModal";
import { getMatchesByPhaseAndMatch } from "./MatchesFunctions.ts";
import { useSelector } from "react-redux";
import axios from "axios";
import WinnerModal from "./WinnerModal";
import { useTranslation } from "react-i18next";

function TeamsForm({ row, i, setMatches, actualTournament }) {
  const [showModal, setShowModal] = React.useState(false);
  const [showWinnerModal, setShowWinnerModal] = React.useState(false);
  const [matchTeams, setMatchTeams] = React.useState([]);

  const [teamA, setTeamA] = React.useState();
  const [teamB, setTeamB] = React.useState();
  const [teamAGoals, setTeamAGoals] = React.useState();
  const [teamBGoals, setTeamBGoals] = React.useState();
  const [teamAPenGoals, setTeamAPenGoals] = React.useState();
  const [teamBPenGoals, setTeamBPenGoals] = React.useState();

  const [winner, setWinner] = React.useState();

  const phase = useSelector((state) => state.phase);

  useEffect(() => {
    if (phase) {
      getMatchesByPhaseAndMatch({
        tournamentId: actualTournament,
        fase: phase,
        matchId: row.id,
      }).then((data) => {
        setMatchTeams(data);

        setTeamAGoals(data[0].goals);
        setTeamBGoals(data[1].goals);
        setTeamAPenGoals(data[0].penalties);
        setTeamBPenGoals(data[1].penalties);

        axios
          .get(`/api/team/${data[0].teamId}`)
          .then((res) => setTeamA(res.data));
        axios
          .get(`/api/team/${data[1].teamId}`)
          .then((res) => setTeamB(res.data));
        axios
          .get(`/api/team/${row.winner}`)
          .then((res) => setWinner(res.data.name));
      });
    }
  }, [row.id]);

  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "October",
    "Novr",
    "Dec",
  ];

  const date = new Date(row.date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const mins = date.getMinutes();

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{row.id}</TableCell>
        {row.date ? (
          <TableCell align="center">
            <span className="font-medium text-green-600">
              {day} {monthNames[month]} of {year} - {hours}:
              {mins === 0 ? "00" : mins}hs
            </span>
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-red-500">{t("SetDate")}</span>
          </TableCell>
        )}

        {teamA ? (
          <TableCell align="center">
            <span className="font-medium text-green-600 tracking-wide">
              {teamA.name} -{" "}
            </span>{" "}
            <span className="font-semibold text-blue-600 tracking-wide">
              ({teamAGoals})
            </span>
            {teamAPenGoals === 0 ? (
              ""
            ) : (
              <span className="font-semibold text-gray-600 tracking-wide">
                {" "}
                - ({teamAPenGoals})
              </span>
            )}
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-red-500">{t("SetATeam")}</span>
          </TableCell>
        )}
        {teamB ? (
          <TableCell align="center">
            <span className="font-medium text-green-600 tracking-wide">
              {teamB.name}
            </span>{" "}
            <span className="font-semibold text-blue-600 tracking-wide">
              ({teamBGoals})
            </span>
            {teamBPenGoals === 0 ? (
              ""
            ) : (
              <span className="font-semibold text-gray-600 tracking-wide">
                {" "}
                - ({teamBPenGoals})
              </span>
            )}
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-red-500">{t("SetATeam")}</span>
          </TableCell>
        )}

        {row.winner ? (
          <TableCell align="center">
            {winner !== undefined ? (
              <span className="font-semibold text-green-600 tracking-wide">
                {winner}
              </span>
            ) : (
              <span className="font-medium text-green-600">{row.winner}</span>
            )}
          </TableCell>
        ) : (
          <TableCell align="center">
            <span className="text-blue-500">{t("SetAWinner")}</span>
          </TableCell>
        )}

        <TableCell align="center">
          <MenuItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => setShowModal(true)}
          >
            <BorderColorIcon color="primary" />
          </MenuItem>
        </TableCell>

        <TableCell align="center">
          <MenuItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => setShowWinnerModal(true)}
          >
            <CheckIcon color="primary" />
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

      {showWinnerModal ? (
        <WinnerModal
          setShowWinnerModal={setShowWinnerModal}
          row={row}
          teamA={teamA}
          teamB={teamB}
          actualTournament={actualTournament}
          setMatches={setMatches}
          matchTeams={matchTeams}
        />
      ) : null}
    </>
  );
}

export default TeamsForm;
