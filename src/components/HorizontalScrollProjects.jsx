import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolio';
import ProjectMedia from './ProjectMedia';

/**
 * HorizontalScrollProjects — Replicates the Zajno horizontal card scroll section.
 * Cards are laid out horizontally and the track scrolls as the user scrolls down,
 * creating the horizontal-within-vertical scroll effect.
 */
export default function HorizontalScrollProjects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Convert vertical scroll to horizontal translation
  const xTranslate = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'relative',
        height: `${Math.max(projects.length * 60, 300)}vh`,
        backgroundColor: '#f5f3ee',
        zIndex: 1,
      }}
    >
      {/* Giant section title */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Title bar at top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: 'var(--space-xl) var(--space-2xl)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(5,5,5,0.1)',
        }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(5,5,5,0.4)' }}>
            Selected Work
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(5,5,5,0.4)' }}>
            {projects.length} Projects
          </span>
        </div>

        {/* Horizontally scrolling card track */}
        <motion.div
          style={{
            x: xTranslate,
            display: 'flex',
            gap: '24px',
            padding: '0 var(--space-2xl)',
            alignItems: 'center',
            width: 'max-content',
          }}
        >
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                style={{
                  width: '340px',
                  flexShrink: 0,
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid rgba(5,5,5,0.08)',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: '0 2px 12px rgba(5,5,5,0.06)',
                  transition: 'box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(5,5,5,0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(5,5,5,0.06)';
                }}
              >
                {/* Top bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    border: '1px solid rgba(5,5,5,0.12)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} style={{ color: '#050505' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{
                        width: '32px', height: '32px',
                        border: '1px solid rgba(5,5,5,0.12)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#555', transition: 'all 0.2s',
                      }}
                    >
                      <Github size={14} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      style={{
                        width: '32px', height: '32px',
                        border: '1px solid rgba(5,5,5,0.12)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#555', transition: 'all 0.2s',
                      }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Project Vector Animation */}
                <div style={{ width: '100%' }}>
                  <ProjectMedia projectId={project.id} />
                </div>

                {/* Project info */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#050505',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6, flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tech.slice(0, 3).map((t, j) => (
                    <span key={j} style={{
                      fontSize: '0.7rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      color: '#888',
                      border: '1px solid rgba(5,5,5,0.1)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '9999px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* View link — Zajno style */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(5,5,5,0.06)',
                  paddingTop: '14px',
                  marginTop: '4px',
                }}>
                  <span style={{
                    fontSize: '0.85rem', fontWeight: 600,
                    color: '#050505',
                  }}>
                    View
                  </span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    style={{ fontSize: '1rem', color: '#050505' }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute',
          bottom: 'var(--space-xl)',
          right: 'var(--space-2xl)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(5,5,5,0.3)' }}>
            Scroll to explore
          </span>
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: 'rgba(5,5,5,0.3)', fontSize: '1rem' }}
          >
            →
          </motion.span>
        </div>
      </div>
    </div>
  );
}
