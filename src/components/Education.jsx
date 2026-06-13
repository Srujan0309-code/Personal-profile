import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Engineering (B.E.) — Computer Engineering',
      institution: 'St. John College of Engineering & Management',
      period: '2024 — Present',
      location: 'Palghar, India',
      details: [
        'Currently pursuing a Bachelor\'s degree in Computer Engineering.',
        'Successfully completed Second Year with a CGPA of 8.39.',
        'Promoted to Third Year.',
      ],
      gpa: 'CGPA: 8.39',
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Mother Mary\'s Junior College, Nallasopara',
      period: '2022 — 2024',
      location: 'Nallasopara, India',
      details: [
        'Completed Higher Secondary Education in the Science Stream.',
        'Secured 68% in the Class XII Board Examinations.',
      ],
      gpa: '68%',
    },
    {
      degree: 'Secondary School Education (Class X)',
      institution: 'KPS English Medium School',
      period: 'Completed in 2022',
      location: 'Mumbai, India',
      details: [
        'Completed secondary schooling with a focus on core subjects.',
        'Secured 73% in the Class X Board Examinations.',
      ],
      gpa: '73%',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="education" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <SectionHeader subtitle="Academic Pathway" title="Education" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="timeline-container"
        >
          {/* Timeline Center Line */}
          <div className="timeline-line" />

          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              {/* Timeline Indicator Dot */}
              <div className="timeline-dot">
                <GraduationCap size={16} />
              </div>

              {/* Timeline Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <span className="timeline-period">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  {edu.gpa && (
                    <span className="timeline-gpa">
                      <Award size={12} />
                      {edu.gpa}
                    </span>
                  )}
                </div>

                <h3 className="timeline-degree">{edu.degree}</h3>
                <h4 className="timeline-institution">{edu.institution}</h4>

                <div className="timeline-location">
                  <MapPin size={12} />
                  <span>{edu.location}</span>
                </div>

                <ul className="timeline-details">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: var(--space-xl) 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          position: relative;
          margin-bottom: var(--space-3xl);
          width: 50%;
        }

        .timeline-item.left {
          align-self: flex-start;
          justify-content: flex-start;
          left: 0;
        }

        .timeline-item.right {
          align-self: flex-end;
          left: 50%;
        }

        .timeline-dot {
          position: absolute;
          top: 20px;
          right: -20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--off-black);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          z-index: 2;
          transition: all var(--duration-fast);
        }

        .timeline-item.right .timeline-dot {
          left: -20px;
          right: auto;
        }

        .timeline-item:hover .timeline-dot {
          background-color: var(--white);
          color: var(--black);
          transform: scale(1.1);
        }

        .timeline-card {
          width: calc(100% - 40px);
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-xl);
          padding: var(--space-xl);
          transition: all var(--duration-normal) var(--ease-out-expo);
          position: relative;
        }

        .timeline-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.3);
          box-shadow: var(--shadow-lg);
        }

        .timeline-card-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-sm);
        }

        .timeline-period, .timeline-gpa {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
        }

        .timeline-period {
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
        }

        .timeline-gpa {
          background-color: rgba(255,255,255,0.08);
          color: var(--off-white);
        }

        .timeline-degree {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: var(--space-xs);
        }

        .timeline-institution {
          font-size: 1rem;
          font-weight: 600;
          color: var(--off-white);
          margin-bottom: var(--space-sm);
        }

        .timeline-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.85rem;
          color: var(--text-tertiary);
          margin-bottom: var(--space-md);
        }

        .timeline-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          padding-left: 1rem;
          list-style-type: disc;
        }

        .timeline-details li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }

          .timeline-item {
            width: 100% !important;
            align-self: flex-start !important;
            justify-content: flex-start !important;
            left: 0 !important;
            padding-left: 45px;
            margin-bottom: var(--space-xl);
          }

          .timeline-dot {
            left: 0 !important;
            right: auto !important;
          }

          .timeline-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
