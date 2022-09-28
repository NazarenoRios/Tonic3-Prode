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

import { getAwards } from "./AwardsFunctions.ts";

import { Header } from "../../../components/AdminPanel";
import AddModal from "./addModal";
import AwardsForm from "./AwardsForm";

import { useTranslation } from "react-i18next";


export default function AwardsModel() {

  const [awards, setAwards] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getAwards().then((data) => setAwards(data));
  }, []);

  function createData(id, name, img, info, country, place) {
    return { id, name, img, info, country, place };
  }

  const rows = awards.map((award, i) =>
    createData(
      award.id,
      award.name,
      award.img,
      award.info,
      award.country,
      award.place,
    )
  );

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <Header title="Awards" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Img</TableCell>
              <TableCell align="center">Description&nbsp;</TableCell>
              <TableCell align="center">Country&nbsp;</TableCell>
              <TableCell align="center">Place&nbsp;</TableCell>
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
              <AwardsForm row={row} key={i} setAwards={setAwards} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal ? (
        <AddModal setShowModal={setShowModal} setAwards={setAwards} />
      ) : null}
    </>
  );
}
