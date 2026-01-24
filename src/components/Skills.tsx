import { Box, Chip, Container, Grid, Paper, Typography, Avatar, Tooltip } from '@mui/material'
import { skillsData, Skill } from '../data/skills'
import { getTechLogo } from '../utils/techLogos'
import CodeIcon from '@mui/icons-material/Code'

// Group skills by category
const skillsByCategory = skillsData.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  },
  {} as Record<string, Skill[]>,
)

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        color="primary"
        gutterBottom
        sx={{ mb: 6, textAlign: 'center', fontWeight: 'bold' }}
      >
        Mes Compétences
      </Typography>

      <Grid container spacing={4}>
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <Grid item xs={12} md={6} lg={4} key={category}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 4,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Typography
                variant="h6"
                color="secondary"
                gutterBottom
                sx={{
                  borderBottom: '2px solid',
                  borderColor: 'secondary.light',
                  pb: 1,
                  mb: 3,
                  fontWeight: 'bold',
                }}
              >
                {category}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {skills.map((skill) => {
                  const logo = getTechLogo(skill.name)
                  return (
                    <Tooltip key={skill.name} title={skill.name} arrow>
                      <Chip
                        label={skill.name}
                        variant="outlined"
                        sx={{
                          fontWeight: 500,
                          borderRadius: 3,
                          py: 2.5,
                          px: 0.5,
                          bgcolor: 'background.default',
                          border: '1px solid',
                          borderColor: 'divider',
                          '& .MuiChip-avatar': { width: 24, height: 24 },
                        }}
                        avatar={
                          logo ? (
                            <Avatar src={logo} alt={skill.name} sx={{ bgcolor: 'transparent' }} />
                          ) : (
                            <CodeIcon />
                          )
                        }
                      />
                    </Tooltip>
                  )
                })}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
