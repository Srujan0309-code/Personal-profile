import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ParallaxSection from './ParallaxSection';
import { maskRevealContainer, maskRevealLine } from '../hooks/useRevealText';
import { stats } from '../data/portfolio';
import AboutAnimation from './AboutAnimation';

export default function About() {
  const statsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const statItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const descriptionLines = [
    'Computer Engineering student at St. John College of',
    'Engineering & Management, passionate about Artificial',
    'Intelligence, Machine Learning, and Computer Vision.',
    '',
    'Experienced in building AI-powered applications, MERN Stack',
    'projects, integrating LLMs, and creating real-world solutions.',
    '',
    'Currently gaining industry experience through an AI & Web',
    'Development Internship — building impactful tech, every day.',
  ];

  return (
    <section id="about" className="section" style={{ overflow: 'hidden', borderTop: '1px solid rgba(5,5,5,0.06)' }}>
      <div className="container">
        <SectionHeader subtitle="Introduction" title="About Me" />

        <div className="about-grid">
          {/* Interactive animation container with parallax */}
          <ParallaxSection speed={0.25} style={{ borderRadius: 'var(--radius-xl)' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="about-image-wrapper"
            >
              <div className="image-border-decoration" />
              <div className="image-container">
                <AboutAnimation />
              </div>
            </motion.div>
          </ParallaxSection>

          {/* Details — Mask reveal on text */}
          <div className="about-details">
            {/* Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                fontWeight: 700,
                color: '#050505',
                marginBottom: 'var(--space-lg)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              Computer Engineering Student,<br/>AI & Full-Stack Builder
            </motion.h3>

            {/* Description — line-by-line mask reveal */}
            <motion.div
              variants={maskRevealContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              style={{ marginBottom: 'var(--space-xl)' }}
            >
              {descriptionLines.map((line, i) =>
                line === '' ? (
                  <div key={i} style={{ height: 'var(--space-md)' }} />
                ) : (
                  <div key={i} style={{ overflow: 'hidden' }}>
                    <motion.p
                      variants={maskRevealLine}
                      style={{
                        fontSize: '1.05rem',
                        color: '#444',
                        lineHeight: 1.65,
                      }}
                    >
                      {line}
                    </motion.p>
                  </div>
                )
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              className="stats-grid"
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={statItemVariants} className="stat-card">
                  <span className="stat-count">{stat.count}+</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--space-4xl);
          align-items: center;
        }
        .about-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        .image-container {
          position: relative;
          z-index: 2;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid rgba(5,5,5,0.1);
          background-color: #ffffff;
          aspect-ratio: 1;
        }
        .image-border-decoration {
          position: absolute;
          inset: -12px;
          border: 1px solid rgba(5,5,5,0.07);
          border-radius: var(--radius-2xl);
          z-index: 1;
          pointer-events: none;
          transition: all var(--duration-normal);
        }
        .about-image-wrapper:hover .image-border-decoration {
          transform: translate(6px, 6px);
          border-color: rgba(5,5,5,0.2);
        }
        .about-details { display: flex; flex-direction: column; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
        }
        .stat-card {
          border: 1px solid rgba(5,5,5,0.1);
          border-radius: var(--radius-lg);
          padding: var(--space-md) var(--space-lg);
          text-align: center;
          transition: all var(--duration-normal);
          background: rgba(5,5,5,0.03);
        }
        .stat-card:hover {
          border-color: rgba(5,5,5,0.25);
          background: rgba(5,5,5,0.06);
          transform: translateY(-4px);
        }
        .stat-count {
          display: block;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: #050505;
          line-height: 1.2;
          margin-bottom: var(--space-xs);
        }
        .stat-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #777;
        }
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; gap: var(--space-2xl); }
          .about-image-wrapper { max-width: 320px; }
        }
        @media (max-width: 576px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
