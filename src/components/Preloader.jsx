import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 1800; // 1.8 seconds for smooth progression
    const intervalTime = 16;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          
          // Trigger a cute blink animation at the end
          setTimeout(() => setBlink(true), 150);
          setTimeout(() => setBlink(false), 300);
          
          setTimeout(() => {
            setIsFinished(true);
            document.body.classList.remove('loading');
            setTimeout(() => {
              if (onLoadComplete) onLoadComplete();
            }, 800); // Shutter animation length
          }, 700);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  // Restrict scroll
  useEffect(() => {
    document.body.classList.add('loading');
    return () => {
      document.body.classList.remove('loading');
    };
  }, []);

  // Eyeball height starts at 2px (closed line) and scales up to 45px (fully open)
  const eyeHeight = 2 + (progress / 100) * 43;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="preloader-overlay"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100vh', 
            transition: { 
              duration: 0.9, 
              ease: [0.85, 0, 0.15, 1] 
            } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#050505',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
            overflow: 'hidden',
          }}
        >
          {/* Subtle grid background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.6,
              pointerEvents: 'none',
            }}
          />

          {/* Soft background glow */}
          <div
            style={{
              position: 'absolute',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(147, 130, 246, 0.1) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
              gap: '28px',
            }}
          >
            {/* ── WAKING MASCOT EYES LOADER ── */}
            <div style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
              {/* Left Eye */}
              <div
                style={{
                  width: '45px',
                  height: blink ? '2px' : `${eyeHeight}px`,
                  backgroundColor: '#ffffff',
                  borderRadius: blink ? '1px' : '50%',
                  border: '3.5px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'height 0.08s ease-out, border-radius 0.08s ease-out',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 4px 15px rgba(255,255,255,0.05)',
                }}
              >
                {!blink && progress > 10 && (
                  <motion.div
                    animate={{
                      x: [0, -3, 3, 0],
                      y: [0, -1.5, 1.5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      repeatDelay: 1,
                    }}
                    style={{
                      width: '18px',
                      height: '18px',
                      backgroundColor: '#050505',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </div>

              {/* Right Eye (Overlapping slightly) */}
              <div
                style={{
                  width: '45px',
                  height: blink ? '2px' : `${eyeHeight}px`,
                  backgroundColor: '#ffffff',
                  borderRadius: blink ? '1px' : '50%',
                  border: '3.5px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'height 0.08s ease-out, border-radius 0.08s ease-out',
                  overflow: 'hidden',
                  position: 'relative',
                  marginLeft: '-8px',
                  boxShadow: '0 4px 15px rgba(255,255,255,0.05)',
                }}
              >
                {!blink && progress > 10 && (
                  <motion.div
                    animate={{
                      x: [0, -3, 3, 0],
                      y: [0, -1.5, 1.5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      repeatDelay: 1,
                    }}
                    style={{
                      width: '18px',
                      height: '18px',
                      backgroundColor: '#050505',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </div>
            </div>

            {/* Title / Name */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}
              >
                SRUJAN POOJARI
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.4)',
                  letterSpacing: '0.08em',
                }}
              >
                PORTFOLIO EXPERIENCE
              </span>
            </div>

            {/* Status Counter */}
            <div
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '6px 18px',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.88rem' }}>STATUS:</span>
              <span style={{ width: '42px', textAlign: 'right', letterSpacing: '0.05em' }}>
                {Math.round(progress).toString().padStart(3, '0')}%
              </span>
            </div>

            {/* Subtle Progress Bar */}
            <div
              style={{
                width: '160px',
                height: '2px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '1px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  backgroundColor: '#ffffff',
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
