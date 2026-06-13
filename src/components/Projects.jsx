import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';
import ProjectMedia from './ProjectMedia';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <SectionHeader subtitle="Portfolio" title="Featured Projects" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="projects-grid"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div key={project.id} variants={itemVariants} className="project-card">
                <div className="project-top-bar">
                  <div className="project-icon-box">
                    <IconComponent size={20} style={{ color: 'var(--white)' }} />
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-btn" aria-label="GitHub">
                      <Github size={16} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-action-btn" aria-label="Live Demo">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div style={{ width: '100%', marginTop: '8px', marginBottom: '4px' }}>
                  <ProjectMedia projectId={project.id} />
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="project-tech-badge">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: rgba(255,255,255,0.06);
        }
        .project-card {
          background: var(--off-black);
          padding: var(--space-xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          transition: background var(--duration-normal);
          position: relative;
          overflow: hidden;
        }
        .project-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: scaleX(0);
          transition: transform var(--duration-normal);
        }
        .project-card:hover { background: var(--dark-gray); }
        .project-card:hover::after { transform: scaleX(1); }
        .project-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .project-icon-box {
          width: 40px; height: 40px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          transition: border-color var(--duration-fast);
        }
        .project-card:hover .project-icon-box { border-color: rgba(255,255,255,0.4); }
        .project-links { display: flex; gap: var(--space-xs); }
        .project-action-btn {
          width: 32px; height: 32px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--gray);
          transition: all var(--duration-fast);
        }
        .project-action-btn:hover { color: var(--white); border-color: rgba(255,255,255,0.5); }
        .project-title {
          font-family: var(--font-display);
          font-size: 1.3rem; font-weight: 700;
          color: var(--white); letter-spacing: -0.02em;
        }
        .project-description {
          font-size: 0.9rem; color: var(--gray);
          line-height: 1.6; flex-grow: 1;
        }
        .project-tech-stack { display: flex; flex-wrap: wrap; gap: 6px; }
        .project-tech-badge {
          font-size: 0.72rem; font-weight: 600;
          color: var(--gray);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          text-transform: uppercase; letter-spacing: 0.04em;
          transition: all var(--duration-fast);
        }
        .project-card:hover .project-tech-badge { border-color: rgba(255,255,255,0.25); color: var(--off-white); }
      `}</style>
    </section>
  );
}
