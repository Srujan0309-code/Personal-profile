import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <SectionHeader subtitle="Expertise" title="My Skills" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="skills-grid"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.id} variants={cardVariants} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <IconComponent size={20} style={{ color: 'var(--white)' }} />
                  </div>
                  <h3 className="skill-card-title">{category.title}</h3>
                </div>
                <ul className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: rgba(255,255,255,0.06);
        }
        .skill-card {
          background: var(--off-black);
          padding: var(--space-xl);
          transition: background var(--duration-normal);
          position: relative;
        }
        .skill-card:hover { background: var(--dark-gray); }
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }
        .skill-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color var(--duration-normal);
          flex-shrink: 0;
        }
        .skill-card:hover .skill-icon-wrapper { border-color: rgba(255,255,255,0.4); }
        .skill-card-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
          letter-spacing: -0.01em;
        }
        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
        }
        .skill-badge {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--gray);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--duration-fast);
        }
        .skill-badge:hover {
          color: var(--white);
          border-color: rgba(255,255,255,0.5);
        }
      `}</style>
    </section>
  );
}
