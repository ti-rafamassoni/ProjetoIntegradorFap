import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { RegisterAlert } from '../component/BasicAlert';

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

export default function Register() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const [showAlert, setShowAlert] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  
  const validateForm = () => {
    const formData = new FormData(document.getElementById('registerForm'));

    const newErrors = {};
    for (const [name, value] of formData.entries()) {
      if (!value) {
        newErrors[name] = 'Este campo é obrigatório.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Restante do código...

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      navigate('/usertable');
    }, 3000);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box
        component="form"
        id="registerForm"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '30ch',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="nameInput"
          name="name"
          label="Nome Completo"
          variant="standard"
          type="text"
          required
          error={!!errors['name']}
          helperText={errors['name']}
        />
        <TextField
          id="emailInput"
          name="email"
          label="Email"
          variant="standard"
          type="email"
          required
          error={!!errors['email']}
          helperText={errors['email']}
        />
        {/* ... (outros campos com validação) */}
        <Button id="registerButton" variant="contained" type="submit">
          Cadastrar
        </Button>
      </Box>
      {showAlert && <RegisterAlert />}
    </ThemeProvider>
  );
}
