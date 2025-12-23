import { createTheme } from '@mui/material/styles';

// Palette "Cozy" : Marron, Beige, Noir
export const theme = createTheme({
  palette: {
    primary: {
      main: '#4E342E', // Marron foncé
      light: '#7b5e57',
      dark: '#260e04',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8D6E63', // Marron moyen
      light: '#be9c91',
      dark: '#5f4339',
      contrastText: '#ffffff',
    },
    background: {
      default: '#EFEBE9', // Beige très clair
      paper: '#ffffff',
    },
    text: {
      primary: '#3E2723', // Marron très foncé
      secondary: '#5D4037',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 300 },
    h2: { fontWeight: 300 },
    h3: { fontWeight: 300 },
    h4: { fontWeight: 400 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 24px rgba(78, 52, 46, 0.15)',
          },
        },
      },
    },
  },
});
