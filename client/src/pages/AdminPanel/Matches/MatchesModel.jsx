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


import { Header } from "../../../components/AdminPanel";
import AddModal from "./addModal";
import MatchesForm from "./MatchesForm";
import {  } from "./MatchesFunctions.ts";

export default function TeamsModel() {

  const [matches, setMatches] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  // React.useEffect(() => {
  //   getTeams().then((data) => setMatches(data));
  // }, []);

  function createData(id, name, logo, info, state) {
    return { id, name, logo, info, state };
  }

  const rows = matches.map((team, i) =>
    createData(
      team.id,
      team.name,
      team.logo,
      team.info,
      team.state,
    )
  );

  return (
    <>
      <Header title="Tournaments" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Logo&nbsp;</TableCell>
              <TableCell align="center">Info&nbsp;</TableCell>
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
              <MatchesForm row={row} key={i} setMatches={setMatches} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal ? (
        <AddModal setShowModal={setShowModal} setMatches={setMatches} />
      ) : null}
    </>
  );
}
