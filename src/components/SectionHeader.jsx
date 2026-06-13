import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ subtitle, title, centered = true }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      className={`section-header ${centered ? 'centered' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={containerVariants}
      style={{
        marginBottom: 'var(--space-3xl)',
        textAlign: centered ? 'center' : 'left',
        maxWidth: '600px',
        marginLeft: centered ? 'auto' : '0',
        marginRight: centered ? 'auto' : '0',
      }}
    >
      {subtitle && (
        <motion.span
          variants={itemVariants}
          style={{
            display: 'inline-block',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--gray)',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-display)',
          }}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariants}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: 'var(--white)',
          letterSpacing: '-0.03em',
        }}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={itemVariants}
        style={{
          width: '32px',
          height: '1px',
          background: 'rgba(255,255,255,0.25)',
          marginTop: 'var(--space-md)',
          marginLeft: centered ? 'auto' : '0',
          marginRight: centered ? 'auto' : '0',
        }}
      />
    </motion.div>
  );
}
