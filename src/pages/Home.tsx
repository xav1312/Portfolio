import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function Home() {
  const navigate = useNavigate();

  // On prend les 3 premiers projets pour l'aperçu
  const recentProjects = Object.values(projectsData).slice(0, 3);

  return (
    <Container maxWidth="lg">
      {/* Section Introduction */}
      <Box sx={{ textAlign: 'center', my: 8 }}>
        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
          Xavier Petilaire-Bellet
        </Typography>
        <Typography variant="h3" color="primary" sx={{ fontWeight: 300, mb: 2 }}>
          Bienvenue sur mon Portfolio
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Raconter mon histoire professionnelle et mettre en avant mes réalisations.
        </Typography>
      </Box>

      {/* Section Projets Récents */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" color="primary" align="center" sx={{ mb: 4 }}>
          Mes Projets Récents
        </Typography>

        <Grid container spacing={4}>
          {recentProjects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            bgcolor: 'rgba(78, 52, 46, 0.7)',
                            color: 'white',
                            p: 1,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6">{project.title}</Typography>
                    </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {project.subtitle}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button size="small" onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${project.id}`);
                  }}>
                    Voir plus
                  </Button>
                  {project.githubLink && (
                      <Button size="small" color="secondary" href={project.githubLink} target="_blank" onClick={(e) => e.stopPropagation()}>
                        GitHub
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
