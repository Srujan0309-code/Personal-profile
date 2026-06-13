import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProjectMedia — Code-driven high-fidelity vector animations for Srujan's projects.
 * These replace static screenshots and external GIFs (which get blocked by hotlink referrers),
 * providing offline-ready, responsive, crisp vector motions.
 */
export default function ProjectMedia({ projectId }) {
  // 1. CARE CONNECT — AI Chatbot Simulation
  if (projectId === 'care-connect') {
    return (
      <div style={mediaContainerStyle('#0b0e14')}>
        {/* Chat window header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: '6px', marginBottom: '8px', width: '100%'
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
            Care Connect AI · Active
          </span>
        </div>

        {/* Scrolling Chat bubbles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', flexGrow: 1, justifyContent: 'flex-end' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, times: [0, 0.1, 0.9, 1] }}
            style={chatBubbleStyle('left')}
          >
            How can I assist you with your health today?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, -10] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, times: [0, 0.3, 0.4, 0.9, 1] }}
            style={chatBubbleStyle('right')}
          >
            I need information on symptoms.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [10, 10, 10, 0, 0, -10] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, times: [0, 0.5, 0.6, 0.7, 0.9, 1] }}
            style={chatBubbleStyle('left', '#1e293b')}
          >
            Analyzing symptoms... Consulting Gemini API.
          </motion.div>
        </div>
      </div>
    );
  }

  // 2. AI SYMPTOM ANALYSIS — Heartbeat / Medical Scan Simulation
  if (projectId === 'ai-symptom') {
    return (
      <div style={mediaContainerStyle('#0c0a1a')}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: '6px', marginBottom: '8px', width: '100%'
        }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
            Symptom Scan ECG · 60 FPS
          </span>
        </div>

        {/* Animated ECG Heartbeat Grid */}
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
          {/* Background Grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }} />

          {/* SVG Heartbeat line */}
          <svg width="100%" height="80" viewBox="0 0 300 80" preserveAspectRatio="none">
            <motion.path
              d="M 0 40 L 40 40 L 50 20 L 60 60 L 70 40 L 110 40 L 120 10 L 130 70 L 140 40 L 180 40 L 190 25 L 200 55 L 210 40 L 300 40"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
            />
          </svg>

          {/* Pulse circular scanner dot */}
          <motion.div
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '25px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'rgba(139, 92, 246, 0.2)',
              border: '1.5px solid #8b5cf6',
            }}
          />
        </div>
      </div>
    );
  }

  // 3. ATS RESUME GENERATOR — Scanning & Score Match Simulation
  if (projectId === 'ats-resume') {
    return (
      <div style={mediaContainerStyle('#1a1105')}>
        {/* Document sheet representation */}
        <div style={{
          width: '75%', height: '85%',
          backgroundColor: '#262017',
          borderRadius: '4px',
          border: '1.5px solid rgba(245, 158, 11, 0.2)',
          padding: '12px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          {/* Document Header lines */}
          <div style={{ width: '40%', height: '5px', backgroundColor: 'rgba(245, 158, 11, 0.4)', borderRadius: '2px' }} />
          <div style={{ width: '25%', height: '3px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '1.5px' }} />
          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', margin: '4px 0' }} />

          {/* Body Lines */}
          <div style={{ width: '85%', height: '3px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '1.5px' }} />
          <div style={{ width: '90%', height: '3px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '1.5px' }} />
          <div style={{ width: '70%', height: '3px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '1.5px' }} />

          {/* Glowing ATS Scanner Line */}
          <motion.div
            animate={{
              y: [-10, 100, -10]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '2.5px',
              background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)',
              boxShadow: '0 0 10px #f59e0b',
            }}
          />
        </div>

        {/* ATS Score Indicator */}
        <div style={{
          position: 'absolute',
          right: '12px',
          bottom: '12px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'rgba(245, 158, 11, 0.08)',
          border: '1.5px solid #f59e0b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(245, 158, 11, 0.15)'
        }}>
          <motion.span
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace' }}
          >
            85%
          </motion.span>
          <span style={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase' }}>
            Score
          </span>
        </div>
      </div>
    );
  }

  // 4. STOVE FLAME DETECTION — YOLO Flame Bounding Box Simulation
  if (projectId === 'stove-flame') {
    return (
      <div style={mediaContainerStyle('#050c12')}>
        {/* Background surveillance camera grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }} />

        {/* Gas Burner Grid */}
        <div style={{
          position: 'relative',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Flame particles loop */}
          {[...Array(8)].map((_, index) => {
            const angle = (index * Math.PI * 2) / 8;
            const x = Math.cos(angle) * 32;
            const y = Math.sin(angle) * 32;
            return (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.4, 0.8, 1],
                  opacity: [0.6, 0.9, 0.4, 0.6],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.12,
                }}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px - 7px)`,
                  top: `calc(50% + ${y}px - 7px)`,
                  width: '14px',
                  height: '14px',
                  borderRadius: '50% 50% 20% 50%',
                  background: 'radial-gradient(circle, #3b82f6 20%, #06b6d4 80%)',
                  transform: 'rotate(-45deg)',
                  filter: 'blur(1px)',
                  boxShadow: '0 0 6px #06b6d4'
                }}
              />
            );
          })}

          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)' }} />
        </div>

        {/* Glowing YOLO Bounding Box Overlay */}
        <motion.div
          animate={{
            borderColor: ['#06b6d4', 'rgba(6, 182, 212, 0.4)', '#06b6d4']
          }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            border: '2px solid #06b6d4',
            borderRadius: '6px',
            boxShadow: '0 0 8px rgba(6, 182, 212, 0.3)',
            display: 'flex',
            alignItems: 'flex-start',
            padding: '4px'
          }}
        >
          {/* Label */}
          <div style={{
            backgroundColor: '#06b6d4',
            color: '#050505',
            fontSize: '0.55rem',
            fontWeight: 800,
            padding: '1px 4px',
            borderRadius: '2px',
            fontFamily: 'monospace',
            textTransform: 'uppercase'
          }}>
            Flame: 96%
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}

// Reusable styles
const mediaContainerStyle = (bgColor) => ({
  width: '100%',
  height: '150px',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundColor: bgColor,
  border: '1px solid rgba(255,255,255,0.06)',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  boxSizing: 'border-box',
});

const chatBubbleStyle = (align, customBg) => ({
  alignSelf: align === 'left' ? 'flex-start' : 'flex-end',
  backgroundColor: customBg || (align === 'left' ? '#1e293b' : 'var(--primary-600, #2563eb)'),
  color: '#ffffff',
  fontSize: '0.68rem',
  padding: '6px 12px',
  borderRadius: align === 'left' ? '8px 8px 8px 2px' : '8px 8px 2px 8px',
  maxWidth: '85%',
  lineHeight: 1.4,
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
});
