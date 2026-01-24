import { useState, useMemo, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material'
import { getTheme } from './theme'
import { ColorModeContext } from './context/ColorModeContext'
import MainLayout from './layouts/MainLayout'

// Lazy Loading des pages
const Home = lazy(() => import('./pages/Home'))
const ProjectList = lazy(() => import('./pages/ProjectList'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

// Composant de chargement simple
const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <CircularProgress color="secondary" />
  </Box>
)

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
      mode,
    }),
    [mode],
  )

  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<ProjectList />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="project/:id" element={<ProjectDetail />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
