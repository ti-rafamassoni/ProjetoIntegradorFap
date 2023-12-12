import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#006711',
    },
    secondary: {
      main: '#DFDFDF',
    },
  },
});

export default function BasicTable() {
  const [users, setUsers] = React.useState([]);
  const [editingUserId, setEditingUserId] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleSave = (userId, updatedUserData) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, ...updatedUserData } : user
    );

    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditingUserId(null);
  };

  const handleClick = () => {
    navigate('/register');
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
                  <TableCell align="center">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={user.name}
                        onChange={(e) =>
                          setUsers((prevUsers) =>
                            prevUsers.map((prevUser) =>
                              prevUser.id === user.id
                                ? { ...prevUser, name: e.target.value }
                                : prevUser
                            )
                          )
                        }
                      />
                    ) : (
                      user.name
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={user.email}
                        onChange={(e) =>
                          setUsers((prevUsers) =>
                            prevUsers.map((prevUser) =>
                              prevUser.id === user.id
                                ? { ...prevUser, email: e.target.value }
                                : prevUser
                            )
                          )
                        }
                      />
                    ) : (
                      user.email
                    )}
                  </TableCell>

                  <TableCell align="center">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={user.birth}
                        onChange={(e) =>
                          setUsers((prevUsers) =>
                            prevUsers.map((prevUser) =>
                              prevUser.id === user.id
                                ? { ...prevUser, birth: e.target.value }
                                : prevUser
                            )
                          )
                        }
                      />
                    ) : (
                      user.birth
                    )}
                  </TableCell>

                  <TableCell align="center">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={user.job}
                        onChange={(e) =>
                          setUsers((prevUsers) =>
                            prevUsers.map((prevUser) =>
                              prevUser.id === user.id
                                ? { ...prevUser, job: e.target.value }
                                : prevUser
                            )
                          )
                        }
                      />
                    ) : (
                      user.job
                    )}
                  </TableCell>

                  <TableCell align="center">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={user.sector}
                        onChange={(e) =>
                          setUsers((prevUsers) =>
                            prevUsers.map((prevUser) =>
                              prevUser.id === user.id
                                ? { ...prevUser, sector: e.target.value }
                                : prevUser
                            )
                          )
                        }
                      />
                    ) : (
                      user.sector
                    )}
                  </TableCell>

                  <TableCell align="center">
                    {editingUserId === user.id ? (
                      <Button onClick={() => handleSave(user.id, {})}>Salvar</Button>
                    ) : (
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                      >
                        <Button onClick={() => handleDelete(user.id)}>Excluir</Button>
                        <Button onClick={() => handleEdit(user.id)}>Editar</Button>
                      </ButtonGroup>
                    )}
                  </TableCell>                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} direction="row" justifyContent="center" m={2}>
          <Button
            id="registerButton"
            variant="contained"
            onClick={handleClick}
          >
            Cadastrar Novo Usuário
          </Button>
        </Stack>
      </ThemeProvider>
    </>
  );
}
