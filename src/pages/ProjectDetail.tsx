import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Grid, Chip, Container, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PublicIcon from '@mui/icons-material/Public';
import { projectsData } from '../data/projects';
import ProjectGallery from '../components/ProjectGallery';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <Container>
        <Typography variant="h4" sx={{ mt: 4 }}>Projet introuvable</Typography>
        <Button onClick={() => navigate('/projects')} sx={{ mt: 2 }}>Retour aux projets</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 4 }}
        color="inherit"
      >
        Retour
      </Button>

      {/* En-tête du projet */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: 3,
                }}
              />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h3" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
                {project.title}
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 3, fontWeight: 300 }}>
                {project.subtitle}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {project.githubLink && (
                  <Button
                    variant="outlined"
                    startIcon={<CodeIcon />}
                    href={project.githubLink}
                    target="_blank"
                    size="large"
                  >
                    Voir le code
                  </Button>
                )}
                {project.liveLink && (
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={project.liveLink}
                    target="_blank"
                    disableElevation
                    size="large"
                  >
                    Voir le site
                  </Button>
                )}
              </Box>
          </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          {/* Description Principale */}
          <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight: 'bold' }}>
            À propos du projet
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 6, fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
            {project.description}
          </Typography>

          {/* Visualisation Interactive (Nouvelle Section) */}
          {project.interactiveViz && (
            <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                    <PublicIcon color="primary" />
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                        Visualisation 3D Interactive
                    </Typography>
                </Box>
                <Paper
                    elevation={3}
                    sx={{
                        width: '100%',
                        height: '500px',
                        overflow: 'hidden',
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: 'divider'
                    }}
                >
                    <iframe
                        src={project.interactiveViz}
                        title="Visualisation 3D"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    />
                </Paper>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', textAlign: 'center' }}>
                    Utilisez votre souris pour tourner, zoomer et explorer la scène.
                </Typography>
            </Box>
          )}

          {/* Processus de Création */}
          {project.creationProcess && (
            <Box sx={{ mb: 6, p: 3, bgcolor: 'background.default', borderRadius: 4, borderLeft: '4px solid', borderColor: 'secondary.main' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                    <EngineeringIcon color="secondary" />
                    <Typography variant="h5" color="secondary" sx={{ fontWeight: 'bold' }}>
                        Processus de création
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line', fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
                    {project.creationProcess}
                </Typography>
            </Box>
          )}

          <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
            Fonctionnalités clés
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {project.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
                Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.technologies.map((tech) => (
                  <Chip key={tech} label={tech} color="secondary" variant="filled" />
                ))}
              </Box>
          </Paper>
        </Grid>
      </Grid>

      <ProjectGallery images={project.gallery} />
    </Container>
  );
}
