import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * InteractiveEyes — A pair of cartoon eyes that track the cursor dynamically.
 */
function InteractiveEyes() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const leftEyebrowRef = useRef(null);
  const rightEyebrowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const updateEye = (eyeEl, pupilEl, eyebrowEl) => {
        if (!eyeEl || !pupilEl) return;
        const rect = eyeEl.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        const maxMove = 8;
        const moveX = Math.cos(angle) * Math.min(maxMove, dist * 0.15);
        const moveY = Math.sin(angle) * Math.min(maxMove, dist * 0.15);

        pupilEl.style.transform = `translate(${moveX}px, ${moveY}px)`;

        if (eyebrowEl) {
          const browY = Math.sin(angle) * 1.5;
          const browRot = Math.cos(angle) * 5;
          eyebrowEl.style.transform = `translateY(${browY}px) rotate(${browRot}deg)`;
        }
      };

      updateEye(leftEyeRef.current, leftPupilRef.current, leftEyebrowRef.current);
      updateEye(rightEyeRef.current, rightPupilRef.current, rightEyebrowRef.current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div ref={leftEyebrowRef} style={{ width: '28px', height: '5px', backgroundColor: '#050505', borderRadius: '2.5px', marginBottom: '3px', transformOrigin: 'center', transition: 'transform 0.1s ease-out' }} />
        <div ref={leftEyeRef} style={{ width: '42px', height: '42px', backgroundColor: '#ffffff', borderRadius: '50%', border: '2.5px solid #050505', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div ref={leftPupilRef} style={{ width: '16px', height: '16px', backgroundColor: '#050505', borderRadius: '50%', transition: 'transform 0.1s ease-out' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '-10px' }}>
        <div ref={rightEyebrowRef} style={{ width: '28px', height: '5px', backgroundColor: '#050505', borderRadius: '2.5px', marginBottom: '3px', transformOrigin: 'center', transition: 'transform 0.1s ease-out' }} />
        <div ref={rightEyeRef} style={{ width: '42px', height: '42px', backgroundColor: '#ffffff', borderRadius: '50%', border: '2.5px solid #050505', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div ref={rightPupilRef} style={{ width: '16px', height: '16px', backgroundColor: '#050505', borderRadius: '50%', transition: 'transform 0.1s ease-out' }} />
        </div>
      </div>
    </div>
  );
}

/**
 * Circular Lens Reveal Transition
 * Renders expanding concentric circular portals linked to scroll.
 */
export default function CloudTransition({
  from = '#050505',
  to = '#e8e4f0',
  flip = false,
  showEyes = true,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Scale map for ripples and fill — increased scale limits for full mobile/desktop viewport coverage
  const scaleRing2 = useTransform(scrollYProgress, [0.05, 0.60], [0.01, 5.2]);
  const scaleRing1 = useTransform(scrollYProgress, [0.10, 0.68], [0.01, 5.0]);
  const scaleFill  = useTransform(scrollYProgress, [0.18, 0.76], [0.01, 4.8]);

  // Fade effects during expansion
  const opacityRing2 = useTransform(scrollYProgress, [0.05, 0.15, 0.60, 0.70], [0, 1, 1, 0]);
  const opacityRing1 = useTransform(scrollYProgress, [0.10, 0.20, 0.68, 0.78], [0, 1, 1, 0]);
  
  // Transition background completely once fill circle covers screen
  const containerBg = useTransform(scrollYProgress, [0.75, 0.76], [from, to]);

  const isDarkTo = to === '#050505' || to === '#0e0e0e';
  const strokeColor1 = isDarkTo ? '#ffffff' : '#050505';
  const strokeColor2 = isDarkTo ? 'rgba(255,255,255,0.4)' : 'rgba(5,5,5,0.4)';

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'relative',
        backgroundColor: containerBg,
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Spacer so scroll has room to trigger */}
      <div style={{ height: '60px' }} />

      <div
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* LENS / RIPPLING CONTAINER */}
        <div style={{ position: 'relative', width: '80vmax', height: '80vmax', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          
          {/* Outer Ripple Ring 2 */}
          <motion.div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `2px dashed ${strokeColor2}`,
              scale: scaleRing2,
              opacity: opacityRing2,
            }}
          />

          {/* Outer Ripple Ring 1 */}
          <motion.div
            style={{
              position: 'absolute',
              width: '90%',
              height: '90%',
              borderRadius: '50%',
              border: `3px solid ${strokeColor1}`,
              scale: scaleRing1,
              opacity: opacityRing1,
            }}
          />

          {/* Solid Expanding Fill Circle */}
          <motion.div
            style={{
              position: 'absolute',
              width: '85%',
              height: '85%',
              borderRadius: '50%',
              backgroundColor: to,
              scale: scaleFill,
            }}
          />

          {/* INTERACTIVE MASCOT EYES */}
          {showEyes && (
            <div
              style={{
                position: 'relative',
                zIndex: 5,
                transform: 'scale(1.2)',
              }}
            >
              <InteractiveEyes />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
