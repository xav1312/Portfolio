import { Box } from '@mui/material';

export function RetroGrid({ angle = 65, opacity = 1 }: { angle?: number, opacity?: number }) {
  return (
    <Box
      sx={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        opacity: opacity,
        perspective: '200px',
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          transform: `rotateX(${angle}deg)`,
          transformOrigin: 'bottom',
          backgroundImage: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)'
              : 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center bottom',
          width: '200vw',
          height: '200vh',
          left: '-50vw',
          bottom: '-100vh',
          animation: 'grid-move 15s linear infinite',
          '@keyframes grid-move': {
            '0%': { transform: `translateY(0) rotateX(${angle}deg)` },
            '100%': { transform: `translateY(40px) rotateX(${angle}deg)` },
          },
        }}
      />
      {/* Absolute overlay fade */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(to bottom, transparent 30%, #0A0A0F 100%)'
              : 'linear-gradient(to bottom, transparent 30%, #F5F5F7 100%)',
        }}
      />
    </Box>
  );
}
