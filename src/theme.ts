import { createTheme } from '@mui/material/styles'

// Palette "Paper White" (Light) - Sophisticated Industrial
const lightPalette = {
  primary: {
    main: '#0A0A0F', // Absolute Ink
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#0066CC', // Control Blue
    contrastText: '#ffffff',
  },
  background: {
    default: '#FDFDFD',
    paper: '#ffffff',
  },
  text: {
    primary: '#0A0A0F',
    secondary: '#555555',
  },
  divider: 'rgba(10, 10, 15, 0.08)',
}

// Palette "Cold Ink" (Dark) - Terminal Aesthetic
const darkPalette = {
  primary: {
    main: '#00FF9D', // Emerald Neon
    contrastText: '#0A0A0F',
  },
  secondary: {
    main: '#FF3B30', // Hazard Orange
    contrastText: '#ffffff',
  },
  background: {
    default: '#0A0A0F', // Ink Black
    paper: '#12121A', // Deep Navy Surface
  },
  text: {
    primary: '#E0E0E6',
    secondary: '#90909A',
  },
  divider: 'rgba(255, 255, 255, 0.1)',
}

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightPalette : darkPalette),
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: '"Outfit", "Geist Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      // Primary Data Font for Industrial Aesthetics
      h6: { fontWeight: 600, fontFamily: '"Geist Mono", monospace', fontSize: '1rem' },
      body1: { lineHeight: 1.7, letterSpacing: '0.01em' },
      button: {
        textTransform: 'uppercase',
        fontWeight: 700,
        fontFamily: '"Geist Mono", monospace',
        letterSpacing: '0.05em',
      },
      overline: {
        fontFamily: '"Geist Mono", monospace',
        fontWeight: 700,
        letterSpacing: '0.1em',
      },
    },
    shape: {
      borderRadius: 4, // Sharper geometry
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarWidth: 'thin',
            scrollbarColor: mode === 'dark' ? '#00FF9D #0A0A0F' : '#0A0A0F #FDFDFD',
            backgroundColor: mode === 'dark' ? '#0A0A0F' : '#FDFDFD',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: '1px solid',
            borderColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            boxShadow: 'none',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            '&:hover': {
              borderColor: mode === 'dark' ? '#00FF9D' : '#0A0A0F',
              transform: 'translateY(-4px)',
              boxShadow:
                mode === 'dark'
                  ? '0 20px 40px rgba(0,255,157,0.05)'
                  : '0 20px 40px rgba(0,0,0,0.05)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '12px 28px',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
              backgroundColor: mode === 'dark' ? '#00e68e' : '#1a1a1f',
            },
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: '"Geist Mono", monospace',
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            fontWeight: 700,
            borderRadius: 2,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#0A0A0F' : '#ffffff',
            color: mode === 'dark' ? '#ffffff' : '#0A0A0F',
            borderBottom: '1px solid',
            borderColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            boxShadow: 'none',
          },
        },
      },
    },
  })
