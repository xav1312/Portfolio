import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface Feedback {
  type: 'success' | 'error'
  message: string
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const SERVICE_ID = 'service_zg1eul5'
  const TEMPLATE_ID = 'template_5tzxrzl'
  const PUBLIC_KEY = 'jkNsqHSvO0DKnc0tv'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

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

  const closeSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
  }

  return {
    formData,
    loading,
    feedback,
    openSnackbar,
    handleChange,
    handleSubmit,
    closeSnackbar,
  }
}
