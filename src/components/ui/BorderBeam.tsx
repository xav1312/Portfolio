import { Box, BoxProps } from '@mui/material';

interface BorderBeamProps extends BoxProps {
  colorFrom?: string;
  duration?: number;
}

export function BorderBeam({
  colorFrom,
  duration = 5,
  ...props
}: BorderBeamProps) {
  return (
    <Box
      {...props}
      sx={{
        position: 'absolute',
        inset: '-2px',
        pointerEvents: 'none',
        borderRadius: 'inherit',
        zIndex: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, width: '200%', height: '100%',
          background: `linear-gradient(90deg, transparent 0%, ${colorFrom || 'currentColor'} 50%, transparent 100%)`,
          animation: `shimmer ${duration}s linear infinite`,
          maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '2px', // border width
          borderRadius: 'inherit',
          opacity: 0.6,
          WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        },
        '@keyframes shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(50%)' },
        },
        ...props.sx
      }}
    />
  );
}
