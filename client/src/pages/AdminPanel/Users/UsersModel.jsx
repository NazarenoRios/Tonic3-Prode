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
import { Button, TextField, ToggleButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from "react-i18next";



export default function UsersModel() {
  const [users, setUsers] = React.useState();
  const [search, setSearch] = React.useState("")
  const [person, setPerson] = React.useState([])
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(allUsers(setUsers));
  }, []);
  
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

  const handleSearch = (e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }
  
  const findPerson = (e)=>{
    e.preventDefault()
    if(search === "") {
       setPerson(search)
       dispatch(allUsers(setUsers))
      }
    else{
      axios.get(`/api/user/userName/${search}`)
      .then((res)=>  setPerson([res.data]))
      .catch((error)=> console.log(error))
    }
  }

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
        <div className="flex justify-between">
          <Header title="Users" />
          <div>
          <TextField id="standard-basic" label="Search user" variant="standard" onChange={handleSearch} />
            <Button onClick={findPerson} style={{paddingTop:"22px"}}>
            <SearchIcon />
            </Button>        
          </div>
        </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">{t("Name")}&nbsp;</TableCell>
              <TableCell align="center">{t("LastName")}&nbsp;</TableCell>
              <TableCell align="center">{t("Phone")}&nbsp;</TableCell>
              <TableCell align="center">{t("ToggleAdmin")}&nbsp;</TableCell>
              <TableCell align="center">{t("Delete")}&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {person[0]?.id?
              person.map((row, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.lastname}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">
                  <ToggleButton
                    value="check"
                    onChange={() => {
                      toggleAdmin(row.id)
                    }}
                  >
                   <CheckCircleIcon /> 
                  </ToggleButton>
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => handleDelete(row.id)} className='text-center'>
                      <DeleteIcon sx={{ color: red[700] }} />
                    </Button>
                  </TableCell>
                  </TableRow>
              ))
              :rows?.map((row, i) => (
              <TableRow key={i}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.lastname}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">
                <ToggleButton
                  value="check"
                  onChange={() => {
                    toggleAdmin(row.id)
                  }}
                >
                  <CheckCircleIcon />
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
