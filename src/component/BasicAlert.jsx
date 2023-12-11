import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

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

export function RegisterAlert() {
  return (
    <ThemeProvider theme={Theme}>
    <Stack sx={{ width: '100%' }} spacing={2}>
       <Alert severity="success">Cadastro realizado com sucesso!</Alert>
    </Stack>
    </ThemeProvider>
  );
}