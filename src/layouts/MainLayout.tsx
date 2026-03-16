import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  Avatar,
  Fab,
  Tooltip,
  Button,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MailIcon from '@mui/icons-material/Mail'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useColorMode } from '../context/ColorModeContext'
import Footer from '../components/Footer'
import { NAV_ITEMS } from '../config/nav'

export default function MainLayout() {
  const theme = useTheme()
  const colorMode = useColorMode()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: '"Geist Mono", monospace', fontWeight: 700 }}>
        XPB.
      </Typography>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ minWidth: 'auto', mr: 2 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/contact"
            selected={location.pathname === '/contact'}
            sx={{ justifyContent: 'center' }}
          >
            <ListItemIcon sx={{ minWidth: 'auto', mr: 2 }}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* Top Navigation (Glassmorphism) */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(10, 10, 15, 0.8)' : 'rgba(253, 253, 253, 0.8)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo Section */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={`${import.meta.env.BASE_URL}flavicon.png`}
                alt="Logo"
                sx={{ width: 40, height: 40, cursor: 'pointer', mr: 2 }}
                variant="rounded"
                component={RouterLink}
                to="/"
              />
              <Typography
                variant="h6"
                noWrap
                component={RouterLink}
                to="/"
                sx={{
                  fontFamily: '"Geist Mono", monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                XPB.
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: location.pathname === item.path ? 700 : 500,
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                variant="outlined"
                component={RouterLink}
                to="/contact"
                sx={{ ml: 1 }}
              >
                Contact
              </Button>
              
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
                aria-label="Changer le thème"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme.palette.mode}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </motion.div>
                </AnimatePresence>
              </IconButton>
            </Box>

            {/* Mobile Navigation Toggle */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                onClick={colorMode.toggleColorMode}
                color="inherit"
                sx={{ mr: 1 }}
                aria-label="Changer le thème"
              >
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Menu principal"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 8, sm: 9, md: 10 }, // Espacement pour passer en dessous de la Topbar fixée
        }}
      >
        <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              sx={{
                position: 'fixed',
                bottom: location.pathname !== '/contact' ? 120 : 32,
                right: location.pathname !== '/contact' ? 48 : 32,
                zIndex: 999,
              }}
            >
              <Tooltip title="Retour en haut" placement="left" arrow>
                <Fab
                  size="small"
                  color="primary"
                  onClick={handleScrollTop}
                  aria-label="scroll back to top"
                  sx={{ boxShadow: 3 }} // Ombre douce cohérente
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </Tooltip>
            </Box>
          )}
        </AnimatePresence>

        {/* Floating Action Button (FAB) - Contact */}
        {location.pathname !== '/contact' && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 32,
              right: 32,
              zIndex: 1000,
            }}
            component={motion.div}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Tooltip title="Me contacter" arrow placement="left">
              <Fab
                component={RouterLink}
                to="/contact"
                color="secondary"
                size="large"
                aria-label="contact"
                sx={{
                  width: 64,
                  height: 64,
                  color: 'white',
                  boxShadow: 4, // Ombre plus douce et élégante que l'ancienne noire agressive
                }}
              >
                <MailIcon sx={{ fontSize: 28 }} />
              </Fab>
            </Tooltip>
          </Box>
        )}

        <Footer />
      </Box>
    </Box>
  )
}
