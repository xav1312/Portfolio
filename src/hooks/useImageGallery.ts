import { useState } from 'react'

export function useImageGallery() {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const handleOpen = (img: string) => {
    setSelectedImage(img)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return {
    open,
    selectedImage,
    handleOpen,
    handleClose,
  }
}
