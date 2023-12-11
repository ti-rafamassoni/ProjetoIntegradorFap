import { AppBar, Button, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createTheme } from "@mui/material";

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
  

const NavigationBar = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
    // Limpar a autenticação e fazer qualquer outra ação necessária
    setAuth(false);
    navigate('/');
    }
    return (
        <ThemeProvider theme={Theme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component='div' sx={{ flexgrow: 1 }}>
                        Business Inteligence
                    </Typography>
                    <Stack direction='row' spacing={2} sx={{ marginLeft: 'auto' }}>
                        <Button color="inherit" onClick={() => navigate('/home')}>Dashboard</Button>
                        <Button color="inherit" onClick={() => navigate('/usertable')}>Usuários</Button>
                        <Button color="inherit" onClick={() => navigate('/profile')}>Perfil</Button>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
} 

export default NavigationBar