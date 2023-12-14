import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeProvider } from '@emotion/react';
import { TableBody, TableCell, TableRow, createTheme } from '@mui/material';
import { TableContainer } from '@mui/material';
import { Paper } from '@mui/material';
import { Table } from '@mui/material';

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


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <ThemeProvider theme={Theme}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Id
              </TableCell>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
            </TableRow>
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Nome
              </TableCell>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
            </TableRow>
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
            </TableRow>
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Data de Nascimento
              </TableCell>
              <TableCell component="th" scope="row">
                {user.birth}
              </TableCell>
            </TableRow>
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Cargo
              </TableCell>
              <TableCell component="th" scope="row">
                {user.job}
              </TableCell>
            </TableRow>
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Setor
              </TableCell>
              <TableCell component="th" scope="row">
                {user.sector}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>

  );
}

export default Profile