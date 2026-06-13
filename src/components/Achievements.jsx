import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { achievements, certifications } from '../data/portfolio';

export default function Achievements() {
  const [activeCert, setActiveCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="achievements" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <SectionHeader subtitle="Milestones" title="Achievements" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="achievements-grid"
        >
          {achievements.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={item.id} variants={itemVariants} className="achievement-card">
                <div className="achievement-icon">
                  <IconComponent size={20} style={{ color: 'var(--white)' }} />
                </div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 'var(--space-4xl)' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-2xl)',
          }}>
            <span style={{
              fontSize: '0.72rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.2em',
              color: 'var(--gray)',
            }}>
              Certifications
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="certs-grid"
          >
            {certifications.map((cert) => {
              const IconComponent = cert.icon;
              const isClickable = !!cert.image;
              
              return (
                <motion.div 
                  key={cert.id} 
                  variants={itemVariants} 
                  className={`cert-card ${isClickable ? 'clickable' : ''}`}
                  onClick={() => isClickable && setActiveCert(cert)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                    <div>
                      <h4 className="cert-title">{cert.title}</h4>
                      {cert.issuer && (
                        <p className="cert-issuer">{cert.issuer}</p>
                      )}
                      {isClickable && (
                        <span className="view-cert-badge">Click to View Certificate</span>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
                      <div className="cert-icon-box">
                        <IconComponent size={16} style={{ color: 'var(--white)' }} />
                      </div>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Image Lightbox Modal ── */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setActiveCert(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <img 
                src={activeCert.image} 
                alt={`${activeCert.title} Certificate`} 
                className="lightbox-image"
              />
              
              <div className="lightbox-meta">
                <h3>{activeCert.title}</h3>
                <p>{activeCert.issuer} • {activeCert.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: rgba(255,255,255,0.06);
        }
        .achievement-card {
          background: var(--off-black);
          padding: var(--space-xl);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-md);
          transition: background var(--duration-normal);
        }
        .achievement-card:hover { background: var(--dark-gray); }
        .achievement-icon {
          width: 44px; height: 44px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          transition: border-color var(--duration-normal);
        }
        .achievement-card:hover .achievement-icon { border-color: rgba(255,255,255,0.4); }
        .achievement-title {
          font-family: var(--font-display);
          font-size: 1.05rem; font-weight: 700;
          color: var(--white);
          line-height: 1.3;
        }
        .achievement-desc {
          font-size: 0.88rem;
          color: var(--gray);
          line-height: 1.6;
        }
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: rgba(255,255,255,0.06);
        }
        .cert-card {
          background: var(--off-black);
          padding: var(--space-lg) var(--space-xl);
          transition: all var(--duration-normal);
          position: relative;
        }
        .cert-card:hover { background: var(--dark-gray); }
        .cert-card.clickable {
          cursor: pointer;
        }
        .cert-card.clickable:hover {
          background: #141414;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
        }
        .cert-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--white);
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .cert-issuer {
          font-size: 0.82rem;
          color: var(--gray);
          margin-bottom: 6px;
        }
        .view-cert-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--white);
          background: rgba(255,255,255,0.1);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          transition: all var(--duration-normal);
        }
        .cert-card.clickable:hover .view-cert-badge {
          background: var(--white);
          color: var(--off-black);
        }
        .cert-icon-box {
          width: 32px; height: 32px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
        }
        .cert-year {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--gray);
          text-transform: uppercase;
        }
        
        /* Lightbox CSS */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(5, 5, 5, 0.95);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: var(--space-xl);
        }
        .lightbox-content {
          position: relative;
          background: #0f0f0f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-xl);
          padding: var(--space-md);
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-md);
          box-shadow: 0 24px 48px rgba(0,0,0,0.5);
        }
        .lightbox-close {
          position: absolute;
          top: -45px;
          right: 0;
          background: none;
          border: none;
          color: var(--white);
          cursor: pointer;
          opacity: 0.7;
          transition: opacity var(--duration-normal);
          padding: 8px;
        }
        .lightbox-close:hover { opacity: 1; }
        .lightbox-image {
          max-height: 70vh;
          max-width: 100%;
          border-radius: var(--radius-lg);
          object-fit: contain;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .lightbox-meta {
          text-align: center;
          color: var(--white);
          margin-bottom: 8px;
        }
        .lightbox-meta h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .lightbox-meta p {
          font-size: 0.9rem;
          color: var(--gray);
        }
        
        @media (max-width: 768px) {
          .lightbox-content {
            padding: var(--space-sm);
          }
          .lightbox-close {
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.6);
            border-radius: var(--radius-full);
          }
        }
      `}</style>
    </section>
  );
}
