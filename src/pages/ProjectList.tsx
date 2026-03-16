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
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function ProjectList() {
  useDocumentTitle('Mes Projets | Xavier Petilaire-Bellet')
  const navigate = useNavigate()
  const allProjects = Object.values(projectsData)

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 8 }}>
        <Typography
          variant="overline"
          color="primary"
          sx={{ mb: 1, display: 'block', opacity: 0.7 }}
        >
          // PROJECT_INDEX
        </Typography>
        <Typography variant="h2" color="text.primary" sx={{ mb: 8, fontWeight: 900 }}>
          Technical Portfolio
        </Typography>

        <Grid container spacing={4}>
          {allProjects.map((project) => (
            // Changement ici : md={6} pour 2 cartes par ligne
            <Grid item xs={12} md={6} key={project.id}>
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
                      height="300" // Hauteur augmentée
                      image={project.image}
                      alt={project.title}
                      // La transition est gérée par le thème
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
