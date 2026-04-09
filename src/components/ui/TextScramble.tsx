import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typography, TypographyProps } from '@mui/material';

const LETTERS = "!<>-_\\/[]{}—=+*^?#_";

interface TextScrambleProps extends Omit<TypographyProps, 'children'> {
  text: string;
  duration?: number;
}

export function TextScramble({ text, duration = 2000, ...props }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = text.length;
    let interval: NodeJS.Timeout;

    const tick = () => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (text[index] === ' ' || text[index] === '\n') return text[index];
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );
      
      if (iteration >= maxIterations) {
        clearInterval(interval);
      }
      
      iteration += 1 / 2; // Speed control
    };

    interval = setInterval(tick, duration / (maxIterations * 2));
    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <Typography
      component={motion.div}
      {...props}
    >
      {displayText}
    </Typography>
  );
}
