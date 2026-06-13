import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * LineArtBackground — Zajno-inspired fixed SVG with:
 * 1. Geometric shapes that draw themselves on scroll (pathLength)
 * 2. A white ball that travels along the main winding path
 */
export default function LineArtBackground() {
  const { scrollYProgress } = useScroll();

  // Smooth spring for the scrolling dot
  const smooth = useSpring(scrollYProgress, { damping: 30, stiffness: 70, mass: 1 });

  // Different path segments animate at different scroll depths
  const p1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const p2 = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const p3 = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const p4 = useTransform(scrollYProgress, [0.45, 0.75], [0, 1]);
  const p5 = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const p6 = useTransform(scrollYProgress, [0.75, 1.0], [0, 1]);

  // The dot position — travels along a predefined coordinate path based on scroll
  const ballX = useTransform(smooth, [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1.0], [768, 780, 750, 768, 730, 760, 768]);
  const ballY = useTransform(smooth, [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1.0], [450, 490, 560, 640, 700, 780, 850]);

  const svgStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 0,
    overflow: 'visible',
  };

  const lp = { fill: 'none', stroke: 'rgba(255,255,255,0.07)', strokeWidth: 1 };

  return (
    <svg style={svgStyle} viewBox="0 0 1536 900" preserveAspectRatio="xMidYMid slice">
      {/* === HORIZONTAL CENTER LINE (hero) === */}
      <motion.line
        x1={0} y1={450} x2={1536} y2={450}
        {...lp}
        strokeDasharray="1536"
        strokeOpacity={0.06}
        style={{ pathLength: p1 }}
      />

      {/* === LARGE LEFT ARC (organic, Zajno cloud shape) === */}
      <motion.path
        d="M -80 900 Q 150 500 80 200 Q 50 100 200 50"
        {...lp}
        strokeDasharray="1100"
        style={{ pathLength: p2 }}
      />

      {/* === WINDING PATH CENTER (the Zajno signature path) === */}
      <motion.path
        d="M 600 -50 Q 800 100 700 300 Q 620 450 700 600 Q 800 750 700 900"
        {...lp}
        strokeDasharray="1300"
        style={{ pathLength: p2, strokeOpacity: 0.08 }}
      />

      {/* === TOP-RIGHT CORNER BRACKET === */}
      <motion.path
        d="M 1200 30 L 1500 30 L 1500 420"
        {...lp}
        strokeDasharray="720"
        style={{ pathLength: p3 }}
      />

      {/* === STAIRCASE BOTTOM-RIGHT (Zajno geometric step) === */}
      <motion.path
        d="M 950 900 L 950 700 L 1100 700 L 1100 550 L 1280 550 L 1280 380 L 1500 380"
        {...lp}
        strokeDasharray="1600"
        style={{ pathLength: p4 }}
      />

      {/* === ORGANIC BLOB BOTTOM-LEFT (Zajno cloud) === */}
      <motion.path
        d="M 20 800 Q 80 700 180 730 Q 200 650 300 670 Q 340 580 430 620 Q 470 550 560 590 Q 560 680 470 700 Q 450 770 340 750 Q 310 820 200 800 Q 150 870 60 840 Z"
        {...lp}
        strokeDasharray="1600"
        style={{ pathLength: p5 }}
      />

      {/* === SECOND LARGE ARC RIGHT === */}
      <motion.path
        d="M 1600 300 Q 1400 400 1450 600 Q 1500 800 1350 900"
        {...lp}
        strokeDasharray="900"
        style={{ pathLength: p5 }}
      />

      {/* === VERTICAL LEFT GUIDE LINE === */}
      <motion.line
        x1={280} y1={0} x2={280} y2={900}
        {...lp}
        strokeDasharray="900"
        strokeOpacity={0.04}
        style={{ pathLength: p3 }}
      />

      {/* === DIAGONAL SLASH === */}
      <motion.line
        x1={650} y1={-30} x2={1350} y2={930}
        {...lp}
        strokeDasharray="1150"
        strokeOpacity={0.04}
        style={{ pathLength: p6 }}
      />

      {/* === CENTER CIRCLE (hero ball ring, static at low opacity) === */}
      <circle cx={768} cy={450} r={80}
        fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={1}
      />

      {/* === THE SCROLLING BALL (Zajno's signature dot on path) === */}
      <motion.circle
        cx={ballX}
        cy={ballY}
        r={6}
        fill="rgba(255,255,255,0.0)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={1}
      />
      {/* Inner dot */}
      <motion.circle
        cx={ballX}
        cy={ballY}
        r={2.5}
        fill="rgba(255,255,255,0.5)"
      />
    </svg>
  );
}
