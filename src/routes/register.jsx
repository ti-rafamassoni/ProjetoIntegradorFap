import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { Alert } from '@mui/material';
import { RegisterAlert } from '../component/BasicAlert';
import { Stack } from '@mui/material';

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

export default function Register() {
    const navigate = useNavigate()
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const [showAlert, setShowAlert] = React.useState(false)
    const handleSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);

      const name = formData.get("name")
      const email = formData.get("email")
      const birth = formData.get("birth")
      const job = formData.get("job")
      const sector = formData.get("sector")
      const password = formData.get("password")
      const confirmPassword = formData.get("confirmPassword")

      const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,4}$/;
      if (!emailRegex.test(email)) {
        alert("E-mail inválido")
      return;
      }

      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!dateRegex.test(birth)) {
        alert('Data de nascimento inválida!');
        return;
      }

      if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 dígitos!');
        return;
      }
  
      if(password !== confirmPassword) {
        alert("As senhas não são iguais");
        return;
      }
  
      const user = {
        id: uuidv4(),
        name: name,
        email: email,
        birth: birth,
        job: job,
        sector: sector,
        password: password
      };
      
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      
      event.target.reset();
      setShowAlert(true)
      
      setTimeout(() => {
        setShowAlert(false);
        navigate('/usertable');
    }, 3000); // Oculta o alerta após 3 segund
     
  };
  return (
    <ThemeProvider theme={Theme}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m:1, width: '30ch' }, display: 'flex',
        flexDirection: 'column', // Configura a direção da coluna
        alignItems: 'center',
      }}
      noValidate
      autoComplete="on"
      onSubmit={handleSubmit}>
        <TextField id="nameInput" name='name'  label="Nome Completo" variant="standard" type='text' required />
        <TextField id="emailInput" name='email'  label="Email" variant="standard" type='email' required />
        <TextField id="birthInput" name='birth'  label="Data de Nascimento" variant='standard' required />
        <TextField id="jobInput" name='job'  label="Cargo" variant="standard" type='text' required />
        <TextField id="sectorInput" name='sector'  label="Setor" variant="standard" type='text' required />
        <TextField id="passwordInput" name='password'  label="Senha (seis dígitos)" variant="standard" required type='password' minlenght={6} />
        <TextField id="confirmPasswordInput" name='confirmPassword'  label="Confirme a senha" variant="standard" required type='password' />
        <Button id="registerButton" variant="contained" type="submit">Cadastrar</Button>
      </Box>
      {showAlert && <RegisterAlert />}
    </ThemeProvider>
  );
}