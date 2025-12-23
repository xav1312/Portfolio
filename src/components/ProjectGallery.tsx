import { useState } from 'react';
import { Box, Typography, Grid, Dialog, IconButton, CardMedia } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  if (!images || images.length === 0) {
    return null;
  }

  const handleOpen = (img: string) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
        Galerie
      </Typography>
      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 1,
                cursor: 'pointer',
                '&:hover .overlay': {
                  opacity: 1,
                },
              }}
              onClick={() => handleOpen(img)}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Gallery image ${index + 1}`}
                sx={{ aspectRatio: '16/9', objectFit: 'cover' }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  bgcolor: 'rgba(78, 52, 46, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
              >
                <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.2)' }}>
                  <VisibilityIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ bgcolor: 'black', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" sx={{ color: 'white' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                <img
                    src={selectedImage}
                    alt="Full screen"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
            </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
