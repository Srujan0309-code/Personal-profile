import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { Mail } from 'lucide-react';
import { contactLinks } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (id) => {
    if (id === 'email') return <Mail size={18} />;
    if (id === 'github') return <Github size={18} />;
    if (id === 'linkedin') return <Linkedin size={18} />;
    return null;
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'var(--space-3xl) 0 var(--space-xl)',
        backgroundColor: 'var(--off-black)',
      }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--white)',
              letterSpacing: '-0.02em',
            }}>
              Srujan Poojari
            </span>
            <p style={{ fontSize: '0.88rem', color: 'var(--gray)', marginTop: 'var(--space-xs)', maxWidth: '280px' }}>
              Building AI-powered applications and scalable web solutions.
            </p>
          </div>

          <div className="footer-actions">
            <div className="footer-socials">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={link.label}
                >
                  {getSocialIcon(link.id)}
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="back-to-top-btn"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', margin: 'var(--space-2xl) 0 var(--space-lg)' }} />

        <div className="footer-bottom">
          <p>© {currentYear} Srujan Poojari. All rights reserved.</p>
          <p style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            Built with <span style={{ color: 'var(--accent-rose)' }}>♥</span> using React & Framer Motion
          </p>
        </div>
      </div>

      <style>{`
        .footer-content { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: var(--space-2xl); }
        .footer-brand { display: flex; flex-direction: column; }
        .footer-actions { display: flex; flex-direction: column; align-items: flex-end; gap: var(--space-md); }
        .footer-socials { display: flex; gap: var(--space-sm); }
        .footer-social-btn {
          width: 38px; height: 38px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: var(--gray);
          display: flex; align-items: center; justify-content: center;
          transition: all var(--duration-fast);
        }
        .footer-social-btn:hover { color: var(--white); border-color: rgba(255,255,255,0.5); transform: translateY(-2px); }
        .back-to-top-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--gray);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          transition: all var(--duration-fast);
          cursor: pointer;
        }
        .back-to-top-btn:hover { color: var(--white); border-color: rgba(255,255,255,0.4); transform: translateY(-2px); }
        .footer-bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: var(--space-sm); font-size: 0.82rem; color: var(--gray); }
        @media (max-width: 576px) {
          .footer-content { flex-direction: column; align-items: flex-start; }
          .footer-actions { align-items: flex-start; width: 100%; }
          .footer-bottom { flex-direction: column; }
        }
      `}</style>
    </footer>
  );
}
