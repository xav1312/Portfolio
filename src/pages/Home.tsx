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
import LockIcon from '@mui/icons-material/Lock'
import DownloadIcon from '@mui/icons-material/Download'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { RetroGrid } from '../components/ui/RetroGrid'
import { TextScramble } from '../components/ui/TextScramble'
import { BorderBeam } from '../components/ui/BorderBeam'

export default function Home() {
  useDocumentTitle('Accueil | Xavier Petilaire-Bellet')
  const navigate = useNavigate()

  // On sélectionne manuellement les projets pour la page d'accueil dans l'ordre souhaité
  const recentProjects = [
    projectsData['trade-copier'],
    projectsData['mutuelio'],
    projectsData['nasa-python']
  ]

  return (
    <Container maxWidth="lg">
      {/* Section Introduction (Hero) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 8, md: 12 },
            px: 2,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1, // theme.shape.borderRadius (4px)
            mb: 8,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <RetroGrid opacity={0.6} angle={60} />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Subtitle / Name */}
            <Typography
              variant="overline"
              color="primary"
              sx={{ display: 'block', mb: 2, opacity: 0.7 }}
            >
              Xavier Petilaire-Bellet // INGÉNIEUR LOGICIEL
            </Typography>

            <Typography variant="h2" color="text.primary" sx={{ mb: 3, fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
              <TextScramble component="div" variant="inherit" text="CONCEPTION D'INTERFACES" />
              <Box component="span" sx={{ color: 'primary.main' }}>
                & SYSTÈMES
              </Box>{' '}
              DE PRÉCISION
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto', mb: 6, fontSize: '1.1rem' }}
            >
              Ingénieur passionné, spécialisé dans l'Architecture Web Hautes Performances, la Visualisation de Données, et les Technologies Financières.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate('/projects')}
                sx={{ px: 4, position: 'relative', overflow: 'hidden' }}
              >
                <BorderBeam colorFrom="#88CCFF" duration={8} />  
                Explorer les Projets
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download="CV_Xavier_Petilaire-Bellet.pdf"
                startIcon={<DownloadIcon />}
                sx={{ px: 4, fontWeight: 700 }}
              >
                Télécharger mon CV
              </Button>
            </Box>
          </Box>
        </Box>
        
        {/* Animated Metrics (Masqué temporairement) 
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 4, md: 8 }, mb: 8, flexWrap: 'wrap' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
                     <AnimatedCounter value={75} prefix="< " suffix="ms" />
                </Typography>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2 }}>Latence de routage</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
                     <AnimatedCounter value={100} suffix="%" />
                </Typography>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2 }}>Haute Disponibilité</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
                     <AnimatedCounter value={3} prefix="+ " />
                </Typography>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2 }}>Projets Industriels</Typography>
            </Box>
        </Box>
        */}

      </motion.div>

      {/* Section Compétences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
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
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {recentProjects.map((project, index) => (
            <Grid
              item
              xs={12}
              md={index === 0 ? 12 : 6}
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
                      height="300"
                      image={project.image}
                      alt={project.title}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        color: 'white',
                        p: 3,
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
                  {project.githubLink ? (
                    <Button
                      size="large"
                      color="inherit"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}
                    >
                      Code
                    </Button>
                  ) : (
                    project.isPrivate && (
                      <Button
                        size="large"
                        color="inherit"
                        startIcon={<LockIcon />}
                        disabled
                        sx={{ opacity: 0.5 }}
                      >
                        Code privé
                      </Button>
                    )
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
