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
  useMediaQuery,
  useTheme,
  Avatar,
  Fab,
  Tooltip,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import HistoryIcon from '@mui/icons-material/History'
import MailIcon from '@mui/icons-material/Mail'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useColorMode } from '../context/ColorModeContext'
import Footer from '../components/Footer'

const drawerWidth = 240

const menuItems = [
  { text: 'Accueil', icon: <HomeIcon />, path: '/' },
  { text: 'Mes Projets', icon: <WorkIcon />, path: '/projects' },
  { text: 'Mon Parcours', icon: <HistoryIcon />, path: '/about' },
]

export default function MainLayout() {
  const theme = useTheme()
  const colorMode = useColorMode()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
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
    <div>
      <Toolbar />
      <List>
        <ListItem>
          <ListItemText
            primary="Navigation"
            primaryTypographyProps={{ color: 'textSecondary', variant: 'overline' }}
          />
        </ListItem>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              selected={location.pathname === item.path}
              onClick={() => isMobile && setMobileOpen(false)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/contact"
            selected={location.pathname === '/contact'}
            onClick={() => isMobile && setMobileOpen(false)}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" secondary="Me contacter" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#181818' : 'primary.main'), // Noir doux en dark mode
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Mon Portfolio
          </Typography>

          <IconButton sx={{ ml: 1, mr: 2 }} onClick={colorMode.toggleColorMode} color="inherit">
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

          <Avatar
            src={`${import.meta.env.BASE_URL}flavicon.png`}
            alt="Logo"
            sx={{ width: 40, height: 40, cursor: 'pointer' }}
            variant="rounded"
            component={RouterLink}
            to="/"
          />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Toolbar />

        <Box sx={{ flexGrow: 1, p: 3 }}>
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
                  sx={{ boxShadow: 3 }}
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Tooltip title="Me contacter" arrow placement="left">
              <Fab
                component={RouterLink}
                to="/contact"
                color="secondary"
                size="large" // Taille standard 'large'
                aria-label="contact"
                sx={{
                  width: 72, // Plus grand que le default (56px)
                  height: 72,
                  color: 'white',
                  boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.3)', // Ombre un peu plus prononcée
                }}
              >
                <MailIcon sx={{ fontSize: 32 }} /> {/* Icône plus grande aussi */}
              </Fab>
            </Tooltip>
          </Box>
        )}

        <Footer />
      </Box>
    </Box>
  )
}
