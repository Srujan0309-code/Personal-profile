import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { maskRevealContainer, maskRevealWord, splitWordsIntoParts } from '../hooks/useRevealText';

/**
 * ZajnoTextReveal — A full-width text reveal block.
 * As section enters viewport, text slides up from a mask.
 * This mimics the Zajno section transitions.
 */
export default function ZajnoTextReveal({ text, smallText, className = '' }) {
  const ref = useRef(null);
  const words = splitWordsIntoParts(text);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        padding: 'var(--space-5xl) 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {smallText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gray)',
              marginBottom: 'var(--space-md)',
            }}
          >
            {smallText}
          </motion.div>
        )}
        <motion.div
          variants={maskRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0 0.28em',
            overflow: 'hidden',
          }}
        >
          {words.map((word, i) => (
            <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
              <motion.span
                variants={maskRevealWord}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: 'var(--white)',
                  letterSpacing: '-0.03em',
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
