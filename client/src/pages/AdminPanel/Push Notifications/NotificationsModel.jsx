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

import { getNotifications } from "./NotificationsFunctions.ts";

import { Header } from "../../../components/AdminPanel";
import AddModal from "./addModal";
import NotificationsForm from "./NotificationsForm";

import { useTranslation } from "react-i18next";


export default function NotificationsModel() {

  const [notifications, setNotifications] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getNotifications().then((data) => setNotifications(data));
  }, []);

  function createData(id, tittle, body, date) {
    return { id, tittle, body, date };
  }

  const rows = notifications.map((award, i) =>
    createData(
      award.id,
      award.tittle,
      award.body,
      award.date,
    )
  );

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <Header title="Notifications" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Info&nbsp;</TableCell>
              <TableCell align="center">Date&nbsp;</TableCell>
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
              <NotificationsForm row={row} key={i} setNotifications={setNotifications} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal ? (
        <AddModal setShowModal={setShowModal} setNotifications={setNotifications} />
      ) : null}
    </>
  );
}
