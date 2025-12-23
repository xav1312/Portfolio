import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Grid, Chip, Card, CardContent, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
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
        sx={{ mb: 2 }}
      >
        Retour
      </Button>

      <Typography variant="h3" color="primary" sx={{ mb: 1 }}>
        {project.title}
      </Typography>
      <Typography variant="h6" color="secondary" sx={{ mb: 4 }}>
        {project.subtitle}
      </Typography>

      <Box
        component="img"
        src={project.image}
        alt={project.title}
        sx={{
          width: '100%',
          maxHeight: 500,
          objectFit: 'cover',
          borderRadius: 3,
          boxShadow: 3,
          mb: 6,
        }}
      />

      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
            À propos du projet
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 4 }}>
            {project.description}
          </Typography>

          <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
            Fonctionnalités clés
          </Typography>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {project.technologies.map((tech) => (
                  <Chip key={tech} label={tech} color="secondary" icon={<CodeIcon />} />
                ))}
              </Box>

              <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                Liens
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {project.githubLink && (
                  <Button
                    variant="outlined"
                    startIcon={<CodeIcon />}
                    href={project.githubLink}
                    target="_blank"
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
                  >
                    Voir le site
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <ProjectGallery images={project.gallery} />
    </Container>
  );
}
