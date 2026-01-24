import { useState } from 'react'
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
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Contact() {
  useDocumentTitle('Contact | Xavier Petilaire-Bellet')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  /*
   * CONFIGURATION EMAILJS
   * Remplace ces valeurs par les tiennes après avoir créé ton compte sur https://www.emailjs.com/
   */
  const SERVICE_ID = 'service_zg1eul5'
  const TEMPLATE_ID = 'template_5tzxrzl'
  const PUBLIC_KEY = 'jkNsqHSvO0DKnc0tv'

  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setFeedback(null)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY,
      )

      setFeedback({ type: 'success', message: 'Merci ! Votre message a bien été envoyé.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setFeedback({
        type: 'error',
        message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.",
      })
    } finally {
      setLoading(false)
      setOpenSnackbar(true)
    }
  }

  const handleCloseSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
  }

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ my: 6, textAlign: 'center' }}>
          <Typography variant="h3" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
            Me Contacter
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
            Un projet ? Une question ? N'hésitez pas à m'écrire !
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

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={feedback?.type || 'success'}
          sx={{ width: '100%' }}
        >
          {feedback?.message}
        </Alert>
      </Snackbar>
    </Container>
  )
}
