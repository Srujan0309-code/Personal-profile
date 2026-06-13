import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import {
  maskRevealContainer,
  maskRevealWord,
  maskRevealLine,
  pillReveal,
  splitWordsIntoParts,
} from '../hooks/useRevealText';

const nameWords = splitWordsIntoParts('Srujan Poojari');

export default function Hero() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '80px',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* ── Kicker ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'var(--space-lg)' }}
        >
          <span style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gray)',
          }}>
            Computer Engineering · AI / ML · Full-Stack Developer
          </span>
        </motion.div>

        {/* ── Name — Mask Reveal ─── */}
        <motion.h1
          variants={maskRevealContainer}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            color: 'var(--white)',
            marginBottom: 'var(--space-lg)',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0 0.28em',
          }}
        >
          {nameWords.map((word, i) => (
            <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
              <motion.span
                variants={maskRevealWord}
                style={{ display: 'inline-block' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* ── Horizontal rule + center circle (Zajno signature) ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.12)', transformOrigin: 'left' }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            style={{
              width: '52px', height: '52px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--white)' }} />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.12)', transformOrigin: 'right' }}
          />
        </motion.div>

        {/* ── Pill labels (Zajno "It also" style) ─── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 1.0 } } }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginBottom: 'var(--space-2xl)' }}
        >
          {['AI/ML Enthusiast', 'MERN Stack Developer', 'Computer Vision Explorer'].map((label, i) => (
            <motion.span
              key={i}
              variants={pillReveal}
              style={{
                display: 'inline-block',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-full)',
                padding: '0.5rem 1.2rem',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--light-gray)',
                backgroundColor: 'rgba(255,255,255,0.04)',
              }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Description — line reveal ─── */}
        <motion.div
          variants={maskRevealContainer}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: 'var(--space-3xl)', overflow: 'hidden', maxWidth: '600px' }}
        >
          {[
            'Passionate Computer Engineering student building',
            'AI-powered applications, MERN Stack projects,',
            'and real-world Computer Vision solutions.',
          ].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.p
                variants={maskRevealLine}
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--gray)',
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </motion.div>

        {/* ── CTAs ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}
        >
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="btn btn-primary">
            <span>View Projects</span>
            <ArrowRight />
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-outline">
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2.0, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={(e) => scrollToSection(e, 'about')}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
          cursor: 'pointer', zIndex: 1,
        }}
      >
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--gray)', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={13} style={{ color: 'var(--gray)' }} />
      </motion.div>
    </section>
  );
}
