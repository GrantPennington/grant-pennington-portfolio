import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6c63ff',       // Your main purple accent
      contrastText: '#e6f0ff' // Light bluish text
    },
    secondary: {
      main: '#4f5eff',        // Glowing blue for buttons
      contrastText: '#e6f0ff'
    },
    background: {
      default: '#0d0d0d',     // Page background
      paper: '#1a1a1a'        // Cards / sections
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;