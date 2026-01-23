import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Container,
  Chip,
  CardActionArea,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../data/projects'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GitHubIcon from '@mui/icons-material/GitHub'
import DownloadIcon from '@mui/icons-material/Download'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'

export default function Home() {
  const navigate = useNavigate()

  // On prend les 3 premiers projets pour l'aperçu
  const recentProjects = Object.values(projectsData).slice(0, 3)

  return (
    <Container maxWidth="lg">
      {/* Section Introduction (Hero) */}
      {/* Section Introduction (Hero) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            textAlign: 'center',
            py: 12,
            px: 2,
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(239,235,233,0.4) 0%, rgba(215,204,200,0.2) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            borderRadius: 8,
            mb: 8,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            color="secondary"
            sx={{ fontWeight: 'bold', mb: 2, letterSpacing: 2, textTransform: 'uppercase' }}
          >
            Xavier Petilaire-Bellet
          </Typography>
          <Typography variant="h2" color="primary" sx={{ mb: 3, fontWeight: 800 }}>
            Bienvenue sur mon Portfolio
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto', lineHeight: 1.6, mb: 4 }}
          >
            Ingénieur passionné par le développement web, le design et l'innovation.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/projects')}
            >
              Voir mes projets
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate('/about')}
            >
              Mon parcours
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              target="_blank"
              download="CV_Xavier_Petilaire-Bellet.pdf"
              startIcon={<DownloadIcon />}
            >
              Télécharger mon CV
            </Button>
          </Box>
        </Box>
      </motion.div>

      {/* Section Compétences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box sx={{ mb: 8 }}>
          <Skills />
        </Box>
      </motion.div>

      {/* Section Projets Récents */}
      <Box sx={{ my: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" color="primary">
            Mes Projets Récents
          </Typography>
          <Button endIcon={<ArrowForwardIcon />} onClick={() => navigate('/projects')}>
            Tout voir
          </Button>
        </Box>

        <Grid
          container
          spacing={4}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {recentProjects.map((project) => (
            // Changement ici : md={6} au lieu de md={4} pour avoir 2 cartes par ligne (plus grandes)
            <Grid
              item
              xs={12}
              md={6}
              key={project.id}
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea
                  onClick={() => navigate(`/project/${project.id}`)}
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="300" // J'augmente aussi la hauteur de l'image (était 220)
                      image={project.image}
                      alt={project.title}
                      // La transition et le scale sont gérés par le thème maintenant
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        color: 'white',
                        p: 3, // Plus de padding
                        pt: 8,
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        {project.title}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3, width: '100%' }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {project.subtitle}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Chip key={tech} label={tech} size="medium" variant="outlined" />
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: 'space-between', px: 3, pb: 3 }}>
                  <Button
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/project/${project.id}`)
                    }}
                  >
                    Détails
                  </Button>
                  {project.githubLink && (
                    <Button
                      size="large"
                      color="inherit"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}
                    >
                      Code
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
