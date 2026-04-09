import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Typography, TypographyProps } from '@mui/material';

interface AnimatedCounterProps extends Omit<TypographyProps, 'children'> {
  value: number;
  suffix?: string;
  prefix?: string;
  direction?: 'up' | 'down';
}

export function AnimatedCounter({ 
  value, 
  direction = "up", 
  suffix = "", 
  prefix = "",
  ...props 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, value, direction]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US").format(
          Number(latest.toFixed(0))
        )}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <Typography component="span" fontWeight="bold" fontFamily='"Geist Mono", monospace' {...props}>
        <span ref={ref} />
    </Typography>
  );
}
