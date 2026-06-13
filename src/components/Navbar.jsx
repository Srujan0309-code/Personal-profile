import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navLinks.map((l) => l.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '72px',
          zIndex: 'var(--z-nav)',
          display: 'flex',
          alignItems: 'center',
          transition: 'background var(--duration-normal), border-color var(--duration-normal)',
          backgroundColor: scrolled ? 'rgba(5,5,5,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>&lt;</span>
            <span>Srujan</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/&gt;</span>
          </a>

          {/* Desktop nav */}
          <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2xl)' }}>
            <ul style={{ display: 'flex', gap: 'var(--space-xl)', listStyle: 'none' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                        color: isActive ? 'var(--white)' : 'var(--gray)',
                        textTransform: 'uppercase',
                        transition: 'color var(--duration-fast)',
                        position: 'relative',
                        paddingBottom: '2px',
                      }}
                      className="nav-link-item"
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="navUnderline"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '1px',
                            background: 'var(--white)',
                          }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Hamburger mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-only"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              color: 'var(--white)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 'var(--radius-full)',
            }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <style>{`
        @media (min-width: 769px) { .desktop-only { display: flex !important; } .mobile-only { display: none !important; } }
        @media (max-width: 768px) { .desktop-only { display: none !important; } .mobile-only { display: flex !important; } }
        .nav-link-item:hover { color: var(--white) !important; }
      `}</style>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(5,5,5,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              zIndex: 'calc(var(--z-nav) - 1)',
              padding: 'var(--space-lg) var(--space-xl) var(--space-2xl)',
              display: 'flex',
            }}
            className="mobile-only"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', width: '100%' }}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: activeSection === link.id ? 'var(--white)' : 'var(--gray)',
                      display: 'block',
                      padding: 'var(--space-sm) 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
