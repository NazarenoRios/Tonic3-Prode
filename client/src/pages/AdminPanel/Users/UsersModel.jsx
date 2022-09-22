import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Header } from "../../../components/AdminPanel";
import { useDispatch } from "react-redux";
import { allUsers } from "../../../state/user";
import { Button, ToggleButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import axios from "axios";
import { MdCheckCircleOutline } from "react-icons/md";



export default function UsersModel() {
  const [users, setUsers] = React.useState();
  const [selected, setSelected] = React.useState();
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(allUsers(setUsers));
  }, []);
  
  console.log(users)
  
  function createData( id ,name, lastname, phone) {
    return { id , name, lastname, phone };
  }
  
  const rows = users?.map((usuario, i) =>
    createData( usuario.id , usuario.name, usuario.lastname, usuario.phone)
  );

  const handleDelete = (id) => {
    axios
      .delete(`/api/user/deleteUser/${id}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };

  const toggleAdmin = (id)=> {
    axios
    .put(`api/user/toggleAdmin/${id}`)
    .then((res)=> res.send)
    .catch(error=> console.log(error))
  }
  
  return (
    <>
      <Header title="Users" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name&nbsp;</TableCell>
              <TableCell align="center">Last name&nbsp;</TableCell>
              <TableCell align="center">Phone&nbsp;</TableCell>
              <TableCell align="center">Toggle Admin&nbsp;</TableCell>
              <TableCell align="center">Delete&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, i) => (
              <TableRow key={i}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.lastname}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">
                <ToggleButton
                  value="check"
                  selected={selected}
                  onChange={() => {
                    toggleAdmin(row.id)
                  }}
                >
                  <MdCheckCircleOutline />
                </ToggleButton>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleDelete(row.id)} className='text-center'>
                    <DeleteIcon sx={{ color: red[700] }} />
                  </Button>
                </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
