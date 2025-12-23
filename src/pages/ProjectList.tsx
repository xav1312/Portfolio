import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Container, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectList() {
  const navigate = useNavigate();
  const allProjects = Object.values(projectsData);

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h3" color="primary" sx={{ mb: 6 }}>
          Tous mes Projets
        </Typography>

        <Grid container spacing={4}>
          {allProjects.map((project) => (
            // Changement ici : md={6} pour 2 cartes par ligne
            <Grid item xs={12} md={6} key={project.id}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                    component="img"
                    height="300" // Hauteur augmentée
                    image={project.image}
                    alt={project.title}
                    sx={{ transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.05)' } }}
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
                            pt: 8
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{project.title}</Typography>
                    </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {project.subtitle}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.technologies.slice(0, 4).map(tech => (
                          <Chip key={tech} label={tech} size="medium" variant="outlined" />
                      ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 3, pb: 3 }}>
                  <Button size="large" endIcon={<ArrowForwardIcon />} onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${project.id}`);
                  }}>
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
  );
}
