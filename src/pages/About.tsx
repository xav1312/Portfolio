import { Box, Typography, Container, Chip, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PublicIcon from '@mui/icons-material/Public'; // Pour l'international

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h3" color="primary" sx={{ mb: 6 }}>
          Mon Parcours
        </Typography>

        {/* Formation & Expériences */}
        <Typography variant="h5" color="secondary" sx={{ mb: 4 }}>
          Formation & Expériences
        </Typography>

        <Box sx={{ mb: 6 }}>
            {/* ESIEA */}
            <Paper elevation={2} sx={{ p: 3, mb: 3, display: 'flex', gap: 2, textAlign: 'left' }}>
                <Box sx={{ color: 'primary.main', mt: 0.5 }}><SchoolIcon fontSize="large" /></Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Étudiant ingénieur Majeure Software Engineering</Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500 }}>ESIEA</Typography>
                    <Typography variant="subtitle2" color="text.secondary">2023 - Aujourd'hui</Typography>
                </Box>
            </Paper>

            {/* Heriot-Watt */}
            <Paper elevation={2} sx={{ p: 3, mb: 3, display: 'flex', gap: 2, textAlign: 'left' }}>
                <Box sx={{ color: 'secondary.main', mt: 0.5 }}><PublicIcon fontSize="large" /></Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Semestre d'études en Écosse</Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500 }}>Heriot-Watt University</Typography>
                    <Typography variant="subtitle2" color="text.secondary">01/2024 - 06/2024</Typography>
                </Box>
            </Paper>

            {/* Prépa */}
            <Paper elevation={2} sx={{ p: 3, mb: 3, display: 'flex', gap: 2, textAlign: 'left' }}>
                <Box sx={{ color: 'primary.main', mt: 0.5 }}><SchoolIcon fontSize="large" /></Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Classe préparatoire MP Option Informatique</Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500 }}>Lycée Général et Technologique de Baimbridge</Typography>
                    <Typography variant="subtitle2" color="text.secondary">2021 - 2023</Typography>
                </Box>
            </Paper>

            {/* Bac */}
            <Paper elevation={2} sx={{ p: 3, mb: 3, display: 'flex', gap: 2, textAlign: 'left' }}>
                <Box sx={{ color: 'primary.main', mt: 0.5 }}><SchoolIcon fontSize="large" /></Box>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Bac Général (Spécialités : Maths et Physique-Chimie)</Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500 }}>Lycée Général et Technologique de Baimbridge</Typography>
                    <Typography variant="subtitle2" color="text.secondary">2021</Typography>
                </Box>
            </Paper>
        </Box>

        {/* Compétences */}
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          Mes Compétences
        </Typography>
        <Grid container spacing={2} justifyContent="center">
            {['JavaScript', 'React', 'TypeScript', 'Vue.js', 'Python', 'Java', 'SQL', 'Git', 'C'].map((skill) => (
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
