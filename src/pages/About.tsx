import { Box, Typography, Container, Chip, Grid, Paper, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // Pour les soft skills

// Mapping des compétences vers leurs logos (URLs CDN Devicon)
const skills = [
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
];

const softSkills = [
  'Travail d\'équipe',
  'Résolution de problèmes',
  'Adaptabilité',
  'Communication',
  'Gestion du temps',
  'Autonomie'
];

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

        {/* Compétences Techniques */}
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          Compétences Techniques
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 8 }}>
            {skills.map((skill) => (
                <Grid item key={skill.name}>
                    <Chip
                        label={skill.name}
                        variant="outlined"
                        sx={{
                            fontSize: '1.1rem',
                            py: 3,
                            px: 1,
                            borderRadius: 3,
                            border: '1px solid #e0e0e0',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            '& .MuiChip-avatar': { width: 28, height: 28 }
                        }}
                        avatar={<Avatar src={skill.logo} alt={skill.name} sx={{ bgcolor: 'transparent' }} />}
                    />
                </Grid>
            ))}
        </Grid>

        {/* Soft Skills */}
        <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
          Soft Skills
        </Typography>
        <Grid container spacing={2} justifyContent="center">
            {softSkills.map((skill) => (
                <Grid item key={skill}>
                    <Chip
                        label={skill}
                        color="secondary"
                        icon={<EmojiObjectsIcon />}
                        sx={{
                            fontSize: '1rem',
                            py: 2.5,
                            px: 2,
                            borderRadius: 8,
                            fontWeight: 500
                        }}
                    />
                </Grid>
            ))}
        </Grid>

      </Box>
    </Container>
  );
}
