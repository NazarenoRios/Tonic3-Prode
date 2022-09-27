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

import { getPlayers } from "./PlayersFunctions.ts";

import { Header } from "../../../components/AdminPanel";
import AddModal from "./addModal";
import PlayerForm from "./PlayerForm";

import { useTranslation } from "react-i18next";


export default function PlayerModel() {

  const [players, setPlayers] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getPlayers().then((data) => setPlayers(data));
  }, []);

  function createData(id, fullname, age, img, info) {
    return { id, fullname, age, img, info};
  }

  const rows = players.map((player, i) =>
    createData(
      player.id,
      player.fullname,
      player.age,
      player.img,
      player.info,
    )
  );

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <Header title="Tournaments" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="center">Fullname</TableCell>
              <TableCell align="center">Age&nbsp;</TableCell>
              <TableCell align="center">Img&nbsp;</TableCell>
              <TableCell align="center">Info&nbsp;</TableCell>
              <TableCell align="center">Edit&nbsp;</TableCell>
              <TableCell align="center">Delete&nbsp;</TableCell>
              <TableCell align="center">
                <MenuItem sx={{ display: "flex", justifyContent: "center" }} onClick={() => setShowModal(true)}>
                  <AddIcon style={{ color: "green" }} />
                </MenuItem>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <PlayerForm row={row} key={i} setTournaments={setPlayers} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal ? (
        <AddModal setShowModal={setShowModal} setPlayers={setPlayers} />
      ) : null}
    </>
  );
}
