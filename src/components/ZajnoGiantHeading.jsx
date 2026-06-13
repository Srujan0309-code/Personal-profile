import React from 'react';
import { motion } from 'framer-motion';

/**
 * ZajnoGiantHeading — Replicates the "IMPLEMENTATION EXAMPLES" giant uppercase
 * heading section. Uses a light lavender/off-white background with massive
 * black display typography. Text splits on scroll entry.
 */
export default function ZajnoGiantHeading({ line1, line2, subtitle, bgColor = '#e8e4f0', textColor = '#050505' }) {
  const lineVariants = {
    hidden: { opacity: 0, y: 80, skewY: 3 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.15,
      },
    }),
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: 'var(--space-5xl) 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(5,5,5,0.4)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {subtitle}
        </motion.div>
      )}

      <div style={{ textAlign: 'center', overflow: 'hidden' }}>
        {[line1, line2].filter(Boolean).map((line, i) => (
          <div key={i} style={{ overflow: 'hidden', lineHeight: 1 }}>
            <motion.h2
              custom={i}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5%' }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 12vw, 11rem)',
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: textColor,
                textTransform: 'uppercase',
                display: 'block',
                paddingBottom: '0.1em',
              }}
            >
              {line}
            </motion.h2>
          </div>
        ))}
      </div>
    </div>
  );
}
