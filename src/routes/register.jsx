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
    const [errors, setErrors] = React.useState({});

    const validateForm = (formData) => {
      const newErrors = {};
    
      for (const [name, value] of formData.entries()) {
        if (!value) {
          newErrors[name] = 'Este campo é obrigatório.';
        }
      }

      const email = formData.get('email');
      const birth = formData.get('birth');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirmPassword');

      const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,4}$/;
      if (email && !emailRegex.test(email)) {
        newErrors['email'] = 'E-mail inválido.';
      }

      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (birth && !dateRegex.test(birth)) {
        newErrors['birth'] = 'Data de nascimento inválida.';
      }

      if (password && password.length < 6) {
        newErrors['password'] = 'A senha deve ter pelo menos 6 dígitos.';
      }

      if (confirmPassword && password !== confirmPassword) {
        newErrors['confirmPassword'] = 'As senhas não são iguais.';
      }

    
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);

  if (!validateForm(formData)) {
    return;
  }

      const name = formData.get("name")
      const email = formData.get("email")
      const birth = formData.get("birth")
      const job = formData.get("job")
      const sector = formData.get("sector")
      const password = formData.get("password")
      const confirmPassword = formData.get("confirmPassword")

      const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,4}$/;
      if (!emailRegex.test(email)) {
      return;
      }

      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!dateRegex.test(birth)) {
        return;
      }

      if (password.length < 6) {
        return;
      }
  
      if(password !== confirmPassword) {
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
  }   
  
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
        <TextField id="nameInput" name='name'  label="Nome Completo" variant="standard" type='text' required error={!!errors['name']}
          helperText={errors['name']} />
        <TextField id="emailInput" name='email'  label="Email" variant="standard" type='email' required error={!!errors['email']}
          helperText={errors['email']}/>
        <TextField id="birthInput" name='birth'  label="Data de Nascimento" variant='standard' required error={!!errors['birth']}
          helperText={errors['birth']} />
        <TextField id="jobInput" name='job'  label="Cargo" variant="standard" type='text' required error={!!errors['job']}
          helperText={errors['job']}/>
        <TextField id="sectorInput" name='sector'  label="Setor" variant="standard" type='text' required error={!!errors['sector']}
          helperText={errors['sector']}/>
        <TextField id="passwordInput" name='password'  label="Senha (seis dígitos)" variant="standard" required type='password' minlenght={6} error={!!errors['password']}
          helperText={errors['password']}/>
        <TextField id="confirmPasswordInput" name='confirmPassword'  label="Confirme a senha" variant="standard" required type='password' error={!!errors['confirmPassword']}
          helperText={errors['confirmPassword']} />
        <Button id="registerButton" variant="contained" type="submit">Cadastrar</Button>
      </Box>
      {showAlert && <RegisterAlert />}
    </ThemeProvider>
  );
}