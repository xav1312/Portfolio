import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';

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
