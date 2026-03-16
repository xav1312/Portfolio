import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
  useTheme,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { motion } from 'framer-motion'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useContactForm } from '../hooks/useContactForm'

export default function Contact() {
  const theme = useTheme()
  useDocumentTitle('Contact | Xavier Petilaire-Bellet')

  const {
    formData,
    loading,
    feedback,
    openSnackbar,
    handleChange,
    handleSubmit,
    closeSnackbar,
  } = useContactForm()

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ my: 8, textAlign: 'center' }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ mb: 1, display: 'block', opacity: 0.7 }}
          >
            // CANAL_COMMUNICATION_SÉCURISÉ
          </Typography>
          <Typography variant="h2" color="text.primary" sx={{ mb: 8, fontWeight: 900 }}>
            Établir le Contact
          </Typography>

          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'inherit',
                        fontFamily: '"Geist Mono", monospace',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'inherit',
                        fontFamily: '"Geist Mono", monospace',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Sujet"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'inherit',
                        fontFamily: '"Geist Mono", monospace',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'inherit',
                        fontFamily: '"Geist Mono", monospace',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={loading ? null : <SendIcon />}
                    sx={{ px: 4, py: 1.5, borderRadius: 2 }}
                  >
                    {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </motion.div>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert
          onClose={closeSnackbar}
          severity={feedback?.type || 'success'}
          sx={{ width: '100%' }}
        >
          {feedback?.message}
        </Alert>
      </Snackbar>
    </Container>
  )
}
