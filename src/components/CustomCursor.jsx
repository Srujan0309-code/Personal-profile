import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 260, mass: 0.5 };
  const cursorRingX = useSpring(cursorX, springConfig);
  const cursorRingY = useSpring(cursorY, springConfig);
  const cursorDotX = useSpring(cursorX, { damping: 40, stiffness: 400 });
  const cursorDotY = useSpring(cursorY, { damping: 40, stiffness: 400 });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .project-card, .skill-card'
      );
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer ring — white, sharp monochrome */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorRingX,
          top: cursorRingY,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.6)',
          pointerEvents: 'none',
          zIndex: 'var(--z-cursor)',
          mixBlendMode: 'difference',
        }}
        animate={{
          scale: isHovered ? 1.6 : isClicking ? 0.7 : 1,
          opacity: isHovered ? 0.9 : 0.6,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorDotX,
          top: cursorDotY,
          marginLeft: 12,
          marginTop: 12,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'var(--white)',
          pointerEvents: 'none',
          zIndex: 'var(--z-cursor)',
          mixBlendMode: 'difference',
        }}
        animate={{
          scale: isHovered ? 0 : isClicking ? 1.8 : 1,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.08 }}
      />
    </>
  );
}
