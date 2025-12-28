import { useState } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
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
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import HistoryIcon from '@mui/icons-material/History';
import MailIcon from '@mui/icons-material/Mail';
import Footer from '../components/Footer';

const drawerWidth = 240;

const menuItems = [
  { text: 'Accueil', icon: <HomeIcon />, path: '/' },
  { text: 'Mes Projets', icon: <WorkIcon />, path: '/projects' },
  { text: 'Mon Parcours', icon: <HistoryIcon />, path: '/about' },
];

export default function MainLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToContact = () => {
    const footer = document.getElementById('contact-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) setMobileOpen(false);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem>
            <ListItemText primary="Navigation" primaryTypographyProps={{ color: 'textSecondary', variant: 'overline' }} />
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
            <ListItemButton onClick={scrollToContact}>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary="Contact" secondary="Me contacter" />
            </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'primary.main',
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

          {/* Logo à droite (remplace le bouton Code) */}
          {/* Utilisation de import.meta.env.BASE_URL pour gérer le chemin GitHub Pages */}
          <Avatar
            src={`${import.meta.env.BASE_URL}flavicon.png`}
            alt="Logo"
            sx={{ width: 40, height: 40, cursor: 'pointer' }}
            variant="rounded"
            component={RouterLink} // Rend le logo cliquable pour revenir à l'accueil
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
            minHeight: '100vh'
        }}
      >
        <Toolbar />

        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
