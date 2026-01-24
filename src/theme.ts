import { createTheme } from '@mui/material/styles'

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
}

// Palette "Nuit" (Dark)
const darkPalette = {
  primary: {
    main: '#D7CCC8', // Beige clair (pour le texte)
    light: '#ffffff',
    dark: '#a69b97',
    contrastText: '#121212',
  },
  secondary: {
    main: '#D7CCC8', // Beige clair (pour les accents/boutons)
    light: '#ffffff',
    dark: '#a69b97',
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
}

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightPalette : darkPalette),
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontFamily: '"Montserrat", sans-serif', fontWeight: 800, letterSpacing: '-0.02em' },
      h2: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700, letterSpacing: '-0.01em' },
      h3: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
      h4: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
      h5: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: mode === 'dark' ? '#6a4f4b #2b2b2b' : '#8D6E63 #f5f5f5',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
              backgroundColor: mode === 'dark' ? '#2b2b2b' : '#f5f5f5',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: mode === 'dark' ? '#6a4f4b' : '#8D6E63',
              minHeight: 24,
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
              backgroundColor: mode === 'dark' ? '#8D6E63' : '#6a4f4b',
            },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
              backgroundColor: mode === 'dark' ? '#8D6E63' : '#6a4f4b',
            },
            '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
              backgroundColor: mode === 'dark' ? '#2b2b2b' : '#f5f5f5',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow:
              mode === 'light' ? '0 4px 20px rgba(0,0,0,0.05)' : '0 4px 20px rgba(0,0,0,0.4)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow:
                mode === 'light'
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
            transition: 'transform 0.2s ease', // Animation fluide
            '&:hover': {
              transform: 'scale(1.05)', // Agrandissement léger
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow:
                mode === 'light'
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
      MuiCardMedia: {
        styleOverrides: {
          root: {
            transition: 'transform 0.5s ease',
            // Effet subtil : légère désaturation par défaut
            // filter: mode === 'light' ? 'sepia(0.2) contrast(0.95)' : 'brightness(0.8) grayscale(0.2)',
            filter: 'none',
          },
        },
      },
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            '&:hover .MuiCardMedia-root': {
              transform: 'scale(1.05)',
              filter: 'none', // Retour aux couleurs vibrantes au survol
            },
          },
        },
      },
    },
  })
