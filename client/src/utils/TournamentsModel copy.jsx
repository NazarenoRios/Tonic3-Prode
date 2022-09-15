import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { MenuItem } from "@mui/material";
import { red } from "@mui/material/colors";

import {
  getTournaments,
  editTournament,
  deleteTournament
} from "./TournamentFunctions.ts";

import { Header } from "../components/AdminPanel";
import AddModal from "../pages/AdminPanel/Tournaments/addModal";

export default function TournamentModel() {

  const [tournaments, setTournaments] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [indiv,setIndiv] = React.useState({})

  React.useEffect(() => {
    getTournaments().then((data) => setTournaments(data));
  }, []);

  function createData(id, name, logo, description, participants, phase, state) {
    return { id, name, logo, description, participants, phase, state };
  }

  const rows = tournaments.map((tournament, i) =>
    createData(
      tournament.id,
      tournament.name,
      tournament.logo,
      tournament.description,
      tournament.participants,
      tournament.phase,
      tournament.state
    )
  );

  const handleDelete = async (tournament) => {
    const deleteT = await deleteTournament(tournament)
    const getall = await getTournaments().then((data) => setTournaments(data));
  };

  const handleEdit = async (tournament) => {
    const setData = await setIndiv(tournament)
    const openModal = await setShowModal(true)
    const editT = await editTournament(tournament)
    const getall = await getTournaments().then((data) => setTournaments(data));
  }


  return (
    <>
      <Header title="Tournaments" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Logo</TableCell>
              <TableCell align="center">Description&nbsp;</TableCell>
              <TableCell align="center">Teams&nbsp;</TableCell>
              <TableCell align="center">Phase&nbsp;</TableCell>
              <TableCell align="center">State&nbsp;</TableCell>
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
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <img alt="" src={row.logo} />
                </TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.participants}</TableCell>
                <TableCell align="center">{row.phase}</TableCell>
                <TableCell align="center">{`${row.state}`}</TableCell>
                <TableCell align="center">
                  <MenuItem sx={{ display: "flex", justifyContent: "center" }} onClick={() => handleEdit(row)}>
                    <BorderColorIcon color="primary" />
                  </MenuItem>
                </TableCell>
                <TableCell align="center">
                  <MenuItem sx={{ display: "flex", justifyContent: "center" }} onClick={() => handleDelete(row)} >
                      <DeleteIcon sx={{ color: red[700] }} />
                  </MenuItem>
                </TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal ? (
        <AddModal setShowModal={setShowModal} setTournaments={setTournaments} indiv={indiv} setIndiv={setIndiv} />
      ) : null}
    </>
  );
}
