import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ParallaxSection — Wraps content with a parallax translation.
 * Children move at a slower rate than scroll, creating depth.
 */
export default function ParallaxSection({ children, speed = 0.3, style = {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [
    `${speed * 100}px`,
    `-${speed * 100}px`,
  ]);

  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
