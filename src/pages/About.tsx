import { Box, Typography, Container, Chip, Grid, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h3" color="primary" sx={{ mb: 6 }}>
          Mon Parcours
        </Typography>

        {/* Expériences */}
        <Typography variant="h5" color="secondary" sx={{ mb: 4 }}>
          Expériences Professionnelles
        </Typography>

        <Box sx={{ mb: 6 }}>
            <Paper elevation={2} sx={{ p: 3, mb: 3, display: 'flex', gap: 2 }}>
                <Box sx={{ color: 'primary.main' }}><WorkIcon fontSize="large" /></Box>
                <Box>
                    <Typography variant="h6">Développeur Full Stack (Stage)</Typography>
                    <Typography variant="subtitle2" color="text.secondary">Entreprise XYZ, Paris</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Développement d'une application web de gestion interne. Utilisation de Vue.js et Node.js. Collaboration avec une équipe de 5 personnes en méthode Agile.
                    </Typography>
                </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 3, mb: 3, display: 'flex', gap: 2 }}>
                <Box sx={{ color: 'secondary.main' }}><CodeIcon fontSize="large" /></Box>
                <Box>
                    <Typography variant="h6">Projet Freelance</Typography>
                    <Typography variant="subtitle2" color="text.secondary">Client ABC</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Création d'un site vitrine pour un artisan local. Design, intégration et mise en ligne.
                    </Typography>
                </Box>
            </Paper>
        </Box>

        {/* Formation */}
        <Typography variant="h5" color="secondary" sx={{ mb: 4 }}>
          Formation
        </Typography>

        <Box sx={{ mb: 6 }}>
            <Paper elevation={2} sx={{ p: 3, mb: 3, display: 'flex', gap: 2 }}>
                <Box sx={{ color: 'primary.main' }}><SchoolIcon fontSize="large" /></Box>
                <Box>
                    <Typography variant="h6">Master Ingénierie du Logiciel</Typography>
                    <Typography variant="subtitle2" color="text.secondary">École Supérieure d'Informatique</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Spécialisation en développement web et mobile. Projets de groupe et apprentissage des bonnes pratiques (Clean Code, TDD).
                    </Typography>
                </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 3, mb: 3, display: 'flex', gap: 2 }}>
                <Box sx={{ color: 'primary.main' }}><SchoolIcon fontSize="large" /></Box>
                <Box>
                    <Typography variant="h6">Baccalauréat Scientifique</Typography>
                    <Typography variant="subtitle2" color="text.secondary">Lycée Exemple</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Option Mathématiques. Mention Bien.
                    </Typography>
                </Box>
            </Paper>
        </Box>

        {/* Compétences */}
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          Mes Compétences
        </Typography>
        <Grid container spacing={2} justifyContent="center">
            {['JavaScript', 'React', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Git', 'Node.js'].map((skill) => (
                <Grid item key={skill}>
                    <Chip
                        label={skill}
                        color="secondary"
                        sx={{ fontSize: '1.1rem', py: 2.5, px: 1 }}
                        icon={<CodeIcon />}
                    />
                </Grid>
            ))}
        </Grid>

      </Box>
    </Container>
  );
}
