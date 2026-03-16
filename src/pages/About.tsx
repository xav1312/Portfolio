import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import PublicIcon from '@mui/icons-material/Public'
import DownloadIcon from '@mui/icons-material/Download'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { skillsData, Skill } from '../data/skills'

// Grouping logic for skills
const categories = ['Langages', 'Front-end', 'Back-end', 'Mobile & Desktop', 'Tools'] as const

const softSkills = [
  "Travail d'équipe",
  'Résolution de problèmes',
  'Adaptabilité',
  'Communication',
  'Gestion du temps',
  'Autonomie',
]

const SkillModule = ({ skill }: { skill: Skill }) => {
  return (
    <Box
      sx={{
        mb: 1.5,
        p: 1.5,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 0.5,
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '">"',
          mr: 1.5,
          color: 'primary.main',
          fontFamily: '"Geist Mono", monospace',
          fontWeight: 700,
        },
      }}
    >
      <Typography variant="body2" sx={{ fontFamily: '"Geist Mono", monospace', fontWeight: 700 }}>
        {skill.name}
      </Typography>
    </Box>
  )
}

export default function About() {
  useDocumentTitle('Mon Parcours | Xavier Petilaire-Bellet')

  return (
    <Container maxWidth="md" sx={{ pb: 10 }}>
      <Box sx={{ my: 8 }}>
        {/* Section Header - Terminal Design */}
        <Box
          sx={{
            p: 4,
            mb: 8,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            position: 'relative',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)'
                : 'linear-gradient(135deg, #FDFDFD 0%, #F5F5F7 100%)',
            '&::before': {
              content: '"[ NOEUD_SYSTEME: A_PROPOS ]"',
              position: 'absolute',
              top: -10,
              left: 20,
              bgcolor: 'background.default',
              px: 1,
              fontFamily: '"Geist Mono", monospace',
              fontSize: '0.7rem',
              color: 'primary.main',
              fontWeight: 700,
            },
          }}
        >
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 1 }}>
                Xavier Petilaire-Bellet
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500, mb: 3 }}>
                Étudiant Ingénieur & Développeur Full-Stack
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download="CV_Xavier_Petilaire-Bellet.pdf"
                startIcon={<DownloadIcon />}
              >
                Télécharger la Documentation (CV)
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Formation & Expériences */}
        <Typography variant="overline" color="primary" sx={{ mb: 2, display: 'block' }}>
          // TRAJECTOIRE_CARRIÈRE
        </Typography>
        <Box sx={{ mb: 10 }}>
          {[
            {
              title: 'Étudiant ingénieur Majeure Software Engineering',
              sub: 'ESIEA',
              date: '2023 - PRESENT',
              icon: <SchoolIcon />,
            },
            {
              title: "Semestre d'études en Écosse",
              sub: 'Heriot-Watt University',
              date: '01/2024 - 06/2024',
              icon: <PublicIcon />,
            },
            {
              title: 'Classe préparatoire MP Option Informatique',
              sub: 'Lycée Baimbridge',
              date: '2021 - 2023',
              icon: <SchoolIcon />,
            },
            {
              title: 'Bac Général (Spécialités : Maths & Physique)',
              sub: 'Lycée Baimbridge',
              date: '2021',
              icon: <SchoolIcon />,
            },
          ].map((item, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                p: 3,
                mb: 2,
                display: 'flex',
                gap: 3,
                textAlign: 'left',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(0, 255, 157, 0.02)'
                      : 'rgba(0, 0, 0, 0.02)',
                },
              }}
            >
              <Box sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}>
                {item.icon}
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: '"Geist Mono", monospace', opacity: 0.8 }}
                >
                  [ {item.sub} ]
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: '"Geist Mono", monospace',
                  fontWeight: 700,
                  alignSelf: 'center',
                  bgcolor: 'divider',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 0.5,
                }}
              >
                {item.date}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Compétences Techniques - Categorized Grid */}
        <Typography variant="overline" color="primary" sx={{ mb: 2, display: 'block' }}>
          // TECHNICAL_MODULES_STATUS
        </Typography>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {categories.map((cat) => (
            <Grid item xs={12} md={6} key={cat}>
              <Box
                sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  height: '100%',
                  bgcolor: 'background.paper',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 3, textTransform: 'uppercase', fontStyle: 'italic', fontWeight: 900 }}
                >
                  {cat}
                </Typography>
                {skillsData
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <SkillModule key={skill.name} skill={skill} />
                  ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Soft Skills */}
        <Typography variant="overline" color="primary" sx={{ mb: 2, display: 'block' }}>
          // CORE_CAPABILITIES
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)',
          }}
        >
          <Grid container spacing={2}>
            {softSkills.map((skill) => (
              <Grid item xs={6} md={4} key={skill}>
                <Typography
                  variant="body2"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: '"Geist Mono", monospace',
                  }}
                >
                  <Box component="span" sx={{ color: 'primary.main', mr: 1 }}>
                    [ OK ]
                  </Box>{' '}
                  {skill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}
