import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto'

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary:{
        main:'#FFD700	'
      }
    },
    typography:{
      fontFamily:'roboto',
    }
  });