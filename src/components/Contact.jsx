import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { contactLinks } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      showToast('Please fill out all required fields.');
      return;
    }
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    showToast('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <SectionHeader subtitle="Get In Touch" title="Contact Me" />

        <div className="contact-grid">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="contact-info-panel"
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--white)', marginBottom: 'var(--space-md)', letterSpacing: '-0.02em' }}>
              Let's build something together
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--gray)', lineHeight: 1.6, marginBottom: 'var(--space-2xl)' }}>
              Open to internships, freelance projects, and collaboration in AI/ML, Computer Vision, and Full-Stack Engineering.
            </p>
            <div className="contact-links-list">
              {contactLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link-row">
                    <div className="contact-link-icon">
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray)', marginBottom: '2px' }}>{link.label}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--off-white)' }}>{link.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="contact-form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Collaboration Request" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Hi Srujan..." required />
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={status === 'sending'} style={{ height: '52px' }}>
                {status === 'sending' ? <span>Sending...</span> : <><span>Send Message</span><Send size={16} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="toast"
          >
            {status === 'success'
              ? <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)' }} />
              : <AlertCircle size={18} style={{ color: 'var(--accent-rose)' }} />}
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: var(--space-4xl);
          align-items: flex-start;
        }
        .contact-info-panel { display: flex; flex-direction: column; }
        .contact-links-list { display: flex; flex-direction: column; gap: var(--space-sm); }
        .contact-link-row {
          display: flex; align-items: center; gap: var(--space-md);
          padding: var(--space-md);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          transition: all var(--duration-normal);
          background: rgba(255,255,255,0.02);
        }
        .contact-link-row:hover {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
          transform: translateX(4px);
        }
        .contact-link-icon {
          width: 40px; height: 40px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--white); flex-shrink: 0;
          transition: border-color var(--duration-fast);
        }
        .contact-link-row:hover .contact-link-icon { border-color: rgba(255,255,255,0.4); }
        .contact-form-wrapper {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-xl);
          padding: var(--space-2xl);
          background: rgba(255,255,255,0.02);
        }
        .contact-form { display: flex; flex-direction: column; gap: var(--space-md); }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 0.78rem; font-weight: 700; color: var(--gray); text-transform: uppercase; letter-spacing: 0.08em; }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: var(--white);
          transition: all var(--duration-fast);
          outline: none;
        }
        .form-group input::placeholder, .form-group textarea::placeholder { color: var(--gray); }
        .form-group input:focus, .form-group textarea:focus {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.06);
        }
        .toast {
          position: fixed; bottom: 30px; right: 30px;
          padding: var(--space-md) var(--space-xl);
          background: var(--dark-gray);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-full);
          color: var(--white);
          font-size: 0.9rem; font-weight: 500;
          display: flex; align-items: center; gap: var(--space-sm);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          z-index: var(--z-toast);
        }
        @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr; gap: var(--space-3xl); } }
        @media (max-width: 576px) {
          .form-row-2 { grid-template-columns: 1fr; }
          .contact-form-wrapper { padding: var(--space-lg); }
        }
      `}</style>
    </section>
  );
}
