import { useState } from 'react'
import { Box, Container, Typography, IconButton, Link, Grid, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = 'petilaire-bell@et.esiea.fr'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Box
      id="contact-footer" // ID important pour le scroll
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Geist Mono", monospace' }}>
              Xavier Petilaire-Bellet
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Étudiant ingénieur passionné par le développement web et logiciel. N'hésitez pas à me
              contacter pour discuter de projets ou d'opportunités.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Geist Mono", monospace' }}>
              Me contacter
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 2 }}>
              <Tooltip title={copied ? 'Copié !' : 'Copier l\'email'} arrow>
                <IconButton
                  onClick={handleCopyEmail}
                  color="inherit"
                  aria-label="Copier l'email"
                  sx={{ '&:hover': { color: 'secondary.light' } }}
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Tooltip>

              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/xavier-petilaire-bellet/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="LinkedIn"
                sx={{ '&:hover': { color: 'secondary.light' } }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>

              <IconButton
                component={Link}
                href="https://github.com/xav1312"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="GitHub"
                sx={{ '&:hover': { color: 'secondary.light' } }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center', opacity: 0.6 }}>
          <Typography variant="caption" sx={{ fontFamily: '"Geist Mono", monospace' }}>
            © {new Date().getFullYear()} Xavier Petilaire-Bellet - Tous droits réservés
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
