import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

const Theme = createTheme({
  palette:{
    primary: {
      main:"#006711",
    },
    secondary: {
      main: "#DFDFDF",
    }
  },
});


export default function BasicTable() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect (() => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || []
      setUsers(storedUsers);
    },[]);


    const handleDelete = (userId) =>  {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers)
      localStorage.setItem('users', JSON.stringify(updatedUsers));
     }

     const handleClick = () => {
      navigate("/register")
      };

  return (
    <>
    <ThemeProvider theme={Theme}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Idade</TableCell>
            <TableCell align="center">Cargo</TableCell>
            <TableCell align="center">Setor</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.birth}</TableCell>
              <TableCell align="center">{user.job}</TableCell>
              <TableCell align="center">{user.sector}</TableCell>
              <TableCell align="center">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button onClick={() => handleDelete(user.id)}>Excluir</Button>
                  <Button onClick={() => handleEdit(user.id)}>Editar</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Stack spacing={2} direction="row" justifyContent="center" m={2}>
      <Button id="registerButton" variant="contained" onClick={handleClick}>Cadastrar Novo Usuário</Button>
    </Stack>
    </ThemeProvider>
    </>
  );
}