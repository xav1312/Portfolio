import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { skillsData, Skill } from '../data/skills';

// Group skills by category
const skillsByCategory = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Mes Compétences
      </Typography>

      <Grid container spacing={3}>
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <Grid item xs={12} md={6} lg={4} key={category}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Typography variant="h6" color="secondary" gutterBottom sx={{ borderBottom: 1, borderColor: 'divider', pb: 1, mb: 2 }}>
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill.name}
                    label={skill.name}
                    variant="outlined"
                    color="primary" // Ou 'default' selon le style voulu
                    sx={{ fontWeight: 500 }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
