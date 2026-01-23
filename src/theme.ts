import { createTheme } from '@mui/material/styles';

// Palette "Cozy" (Light)
const lightPalette = {
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
    default: '#F5F5F5', // Beige très clair
    paper: '#ffffff',
  },
  text: {
    primary: '#3E2723',
    secondary: '#5D4037',
  },
};

// Palette "Nuit" (Dark)
const darkPalette = {
  primary: {
    main: '#D7CCC8', // Beige clair (inversé)
    light: '#ffffff',
    dark: '#a69b97',
    contrastText: '#121212',
  },
  secondary: {
    main: '#BCAAA4', // Marron désaturé
    light: '#efdcd5',
    dark: '#8c7b75',
    contrastText: '#121212',
  },
  background: {
    default: '#121212', // Noir profond
    paper: '#1E1E1E', // Gris foncé
  },
  text: {
    primary: '#EFEBE9', // Blanc cassé
    secondary: '#BCAAA4', // Gris beige
  },
};

export const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    ...(mode === 'light' ? lightPalette : darkPalette),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'light' 
            ? '0 4px 20px rgba(0,0,0,0.05)' 
            : '0 4px 20px rgba(0,0,0,0.4)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: mode === 'light'
              ? '0 12px 30px rgba(78, 52, 46, 0.15)'
              : '0 12px 30px rgba(0,0,0,0.6)',
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
            boxShadow: mode === 'light'
              ? '0 4px 12px rgba(78, 52, 46, 0.2)'
              : '0 4px 12px rgba(255, 255, 255, 0.1)',
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
