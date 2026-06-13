import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ZajnoScrollPath — The signature Zajno animation:
 * A dot that travels along a curved SVG path as the user scrolls.
 * Inspired directly by the #vrtx path in motion.zajno.com
 */
export default function ZajnoScrollPath() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth spring for the dot travel
  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 80 });

  // The signature curved path matching Zajno's winding line
  const svgPath = "M250 0 C250 0 320 0 360 0 C480 0 490 180 490 180 C490 180 440 140 360 140 C240 140 180 230 180 320 C180 410 180 520 180 700 C210 660 250 640 310 640 C420 640 500 780 500 990 C470 960 400 920 310 920 C180 920 120 1030 120 1120 C120 1280 60 1680 40 2000 L40 2400";

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'visible',
      }}
    >
      <svg
        viewBox="0 0 600 2400"
        width="600"
        height="100%"
        style={{ overflow: 'visible', display: 'block' }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* The main winding path — drawn using stroke-dasharray */}
        <motion.path
          ref={pathRef}
          d={svgPath}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          style={{ pathLength: smoothProgress }}
          strokeDasharray="1 0"
        />
        {/* A second version of the path drawn fully at very low opacity as guide */}
        <path
          d={svgPath}
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
