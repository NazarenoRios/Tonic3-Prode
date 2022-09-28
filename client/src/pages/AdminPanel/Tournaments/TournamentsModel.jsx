import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { MenuItem } from "@mui/material";

import { getTournaments } from "./TournamentFunctions.ts";

import { Header } from "../../../components/AdminPanel";
import AddModal from "./addModal";
import TournamentForm from "./TournamentForm";

import { useTranslation } from "react-i18next";


export default function TournamentModel() {

  const [tournaments, setTournaments] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getTournaments().then((data) => setTournaments(data));
  }, []);

  function createData(id, name, logo, description, participants, phase, state) {
    return { id, name, logo, description, participants, phase };
  }

  const rows = tournaments.map((tournament, i) =>
    createData(
      tournament.id,
      tournament.name,
      tournament.logo,
      tournament.description,
      tournament.participants,
      tournament.phase,
    )
  );

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <Header title={t("Tournaments")} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t("Name")}</TableCell>
              <TableCell align="center">{t("Logo")}</TableCell>
              <TableCell align="center">{t("Description")}&nbsp;</TableCell>
              <TableCell align="center">{t("Teams")}&nbsp;</TableCell>
              <TableCell align="center">{t("Phase")}&nbsp;</TableCell>
              <TableCell align="center">{t("Edit")}&nbsp;</TableCell>
              <TableCell align="center">{t("Delete")}&nbsp;</TableCell>
              <TableCell align="center">
                <MenuItem sx={{ display: "flex", justifyContent: "center" }} onClick={() => setShowModal(true)}>
                  <AddIcon style={{ color: "green" }} />
                </MenuItem>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TournamentForm row={row} key={i} setTournaments={setTournaments} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal ? (
        <AddModal setShowModal={setShowModal} setTournaments={setTournaments} />
      ) : null}
    </>
  );
}
