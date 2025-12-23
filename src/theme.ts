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
      default: '#F5F5F5', // Beige très clair, plus lumineux
      paper: '#ffffff',
    },
    text: {
      primary: '#3E2723', // Marron très foncé
      secondary: '#5D4037',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 600 }, // Boutons plus modernes (pas tout en majuscules)
  },
  shape: {
    borderRadius: 16, // Arrondis plus prononcés comme sur les designs modernes
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)', // Ombre très douce par défaut
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 30px rgba(78, 52, 46, 0.15)', // Ombre marron au survol
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(78, 52, 46, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
});
