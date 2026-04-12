import { useState, useMemo, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline, Box, Skeleton, Container, Grid } from '@mui/material'
import { getTheme } from './theme'
import { ColorModeContext } from './context/ColorModeContext'
import MainLayout from './layouts/MainLayout'

// Lazy Loading des pages
const Home = lazy(() => import('./pages/Home'))
const ProjectList = lazy(() => import('./pages/ProjectList'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

// Composant de chargement avec Skeletons pour éviter le "Content Jumping"
const PageSkeleton = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Skeleton variant="text" sx={{ fontSize: '3rem', width: '60%', mb: 4, mx: 'auto' }} />
    <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2, mb: 4 }} />
    <Grid container spacing={4}>
      {[1, 2, 3].map((i) => (
        <Grid item xs={12} md={4} key={i}>
          <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </Grid>
      ))}
    </Grid>
  </Container>
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
        <Suspense fallback={<PageSkeleton />}>
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
