import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ZajnoHeroIntro — Exact reproduction of the Zajno hero "intro ball" screen:
 * A full-width horizontal line with a circle + white dot in the center.
 * Text fades in below. The ball and line animate on entry.
 */
export default function ZajnoHeroIntro({ quote, isHero = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ballY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        minHeight: isHero ? '100vh' : '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#050505',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Full-width horizontal line + circle — exact Zajno style */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', y: ballY }}
      >
        {/* Left line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.25)',
            transformOrigin: 'right',
          }}
        />

        {/* Center circle — the Zajno signature element */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
          }}
        >
          {/* Inner pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          />
          {/* Center white dot */}
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
            }}
          />
        </motion.div>

        {/* Right line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.25)',
            transformOrigin: 'left',
          }}
        />
      </motion.div>

      {/* Quote text below the line */}
      <motion.div
        style={{
          y: textY,
          opacity,
          marginTop: '64px',
          padding: '0 var(--space-xl)',
          textAlign: 'center',
          maxWidth: '640px',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          {quote}
        </motion.p>
      </motion.div>
    </div>
  );
}
