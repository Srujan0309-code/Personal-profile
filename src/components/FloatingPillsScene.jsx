import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * FloatingPillsScene — Recreates the Zajno "It also / your / controls / attention"
 * section. White pill-shaped bubbles with serif text float against a black background
 * with SVG architectural line-art that draws itself on scroll.
 */

// Skill Icon SVG Components
const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#e34f26" strokeWidth="2">
    <path d="M12 2L2 5l1.5 14 8.5 3 8.5-3L22 5z" />
    <path d="M12 15l-3.5-1.5-.3-3h7.6" />
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1572b6" strokeWidth="2">
    <path d="M12 2L2 5l1.5 14 8.5 3 8.5-3L22 5z" />
    <path d="M12 17l-4-1.5-.5-5h9l-.5 4.5z" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#06b6d4" strokeWidth="2">
    <path d="M12 3c-1.2 0-2.4.6-3.6 1.8C6 7.2 4.5 11.4 4.5 15c0 3.3 2.2 5 4.5 5 1.2 0 2.4-.6 3.6-1.8c2.4-2.4 3.9-6.6 3.9-10.2 0-3.3-2.2-5-4.5-5z" />
    <path d="M19.5 9c0 3.3-2.2 5-4.5 5-1.2 0-2.4-.6-3.6-1.8-2.4-2.4-3.9-6.6-3.9-10.2 0-3.3 2.2-5 4.5-5 1.2 0 2.4.6 3.6 1.8 2.4 2.4 3.9 6.6 3.9 10.2z" opacity="0.7" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="20" height="20" fill="none" stroke="#61dafb" strokeWidth="1.2">
    <circle r="2.05" fill="#61dafb"/>
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </svg>
);

const MongodbIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#47a248" strokeWidth="2">
    <path d="M12 2c0 0-4 4-4 9 0 4 3 6 4 9 1-3 4-5 4-9 0-5-4-9-4-9z" />
    <path d="M12 6v10" />
  </svg>
);

const NodejsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#339933" strokeWidth="2">
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
    <path d="M12 22V12m0 0L3 7m9 5l9-5" opacity="0.5" />
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f7df1e" strokeWidth="2">
    <rect width="20" height="20" x="2" y="2" rx="4" />
    <path d="M13 14v1c0 1.5-1 2-2.5 2M17 11v4c0 1.5-.5 2-2 2" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3776ab" strokeWidth="2">
    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-1 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm2 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    <path d="M12 6c-3 0-4 1-4 4h8c0-3-1-4-4-4zm0 12c3 0 4-1 4-4H8c0 3 1 4 4 4z" />
  </svg>
);

const CppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00599c" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9H9v6h6M12 9v6M9 12h6" />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f89820" strokeWidth="2">
    <path d="M6 15c0 3 3 4 6 4s6-1 6-4-3-3-6-3-6 0-6 3z" />
    <path d="M10 9c0-3 2-4 2-4s1 2 0 4M13 10c0-2 2-3 2-3s1 2 0 3" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#000000" strokeWidth="2">
    <path d="M12 2L2 22h20L12 2z" fill="#000000" />
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ff6c37" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const RenderIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#46e3b7" strokeWidth="2">
    <path d="M12 2L2 22h8l2-4 2 4h8L12 2z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#333333" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f24e1e" strokeWidth="2">
    <circle cx="9" cy="5" r="3" />
    <circle cx="15" cy="5" r="3" />
    <circle cx="9" cy="12" r="3" />
    <circle cx="15" cy="12" r="3" />
    <path d="M6 19a3 3 0 0 0 6 0v-3H6z" />
  </svg>
);

const SqlIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00758f" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3ecf8e" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ChatgptIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10a37f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6" opacity="0.6" />
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5-2 4-2 4 2 4 2" />
    <path d="M9 9h.01M15 9h.01" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M6 9v6M9 18h6" />
  </svg>
);

const VsCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#007acc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 6L9 19l-5-5L17 3z" />
    <path d="M2 17l6-6-6-6" />
  </svg>
);

const PILLS = [
  { text: 'React.js', icon: ReactIcon, x: '15%', y: '12%', delay: 0.05, isSkill: true },
  { text: 'HTML5', icon: HtmlIcon, x: '42%', y: '8%', delay: 0, isSkill: true },
  { text: 'CSS3', icon: CssIcon, x: '78%', y: '12%', delay: 0.1, isSkill: true },
  { text: 'Tailwind', icon: TailwindIcon, x: '25%', y: '24%', delay: 0.15, isSkill: true },
  { text: 'JavaScript', icon: JsIcon, x: '62%', y: '22%', delay: 0.2, isSkill: true },
  { text: 'Python', icon: PythonIcon, x: '85%', y: '28%', delay: 0.25, isSkill: true },
  { text: 'C++', icon: CppIcon, x: '12%', y: '36%', delay: 0.1, isSkill: true },
  { text: 'Java', icon: JavaIcon, x: '45%', y: '34%', delay: 0.15, isSkill: true },
  { text: 'Node.js', icon: NodejsIcon, x: '72%', y: '42%', delay: 0.2, isSkill: true },
  { text: 'MongoDB', icon: MongodbIcon, x: '28%', y: '50%', delay: 0.25, isSkill: true },
  { text: 'SQL', icon: SqlIcon, x: '55%', y: '48%', delay: 0.3, isSkill: true },
  { text: 'Supabase', icon: SupabaseIcon, x: '88%', y: '54%', delay: 0.12, isSkill: true },
  { text: 'Git', icon: GitIcon, x: '15%', y: '62%', delay: 0.18, isSkill: true },
  { text: 'GitHub', icon: GithubIcon, x: '48%', y: '64%', delay: 0.22, isSkill: true },
  { text: 'VS Code', icon: VsCodeIcon, x: '75%', y: '68%', delay: 0.28, isSkill: true },
  { text: 'Vercel', icon: VercelIcon, x: '32%', y: '78%', delay: 0.14, isSkill: true },
  { text: 'Postman', icon: PostmanIcon, x: '62%', y: '80%', delay: 0.24, isSkill: true },
  { text: 'Render', icon: RenderIcon, x: '85%', y: '85%', delay: 0.34, isSkill: true },
  { text: 'Figma', icon: FigmaIcon, x: '18%', y: '90%', delay: 0.16, isSkill: true },
  { text: 'ChatGPT', icon: ChatgptIcon, x: '45%', y: '92%', delay: 0.26, isSkill: true },
  { text: 'Claude', icon: ClaudeIcon, x: '72%', y: '92%', delay: 0.36, isSkill: true },
];

export default function FloatingPillsScene() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Paths that draw themselves on scroll (exact Zajno architectural shapes)
  const p1 = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const p2 = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const p3 = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const p4 = useTransform(scrollYProgress, [0.3, 0.9], [0, 1]);

  // The traveling ball
  const ballX = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [700, 650, 680, 720, 690]);
  const ballY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [100, 250, 380, 500, 680]);

  const strokeProps = {
    fill: 'none',
    stroke: 'rgba(255,255,255,0.35)',
    strokeWidth: 1,
  };

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '180vh',
        backgroundColor: '#050505',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* SVG Line art scene — architectural shapes like Zajno */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 1536 900"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          preserveAspectRatio="xMidYMid slice"
        >
          {/* === LEFT SIDE: Building / arch shapes === */}
          {/* Arch 1 */}
          <motion.path
            d="M 60 900 L 60 500 Q 60 400 140 400 Q 220 400 220 500 L 220 900"
            {...strokeProps}
            strokeDasharray="1200"
            style={{ pathLength: p1 }}
          />
          {/* Arch 2 */}
          <motion.path
            d="M 180 900 L 180 520 Q 180 420 260 420 Q 340 420 340 520 L 340 900"
            {...strokeProps}
            strokeDasharray="1200"
            style={{ pathLength: p2 }}
          />
          {/* Building rectangle */}
          <motion.rect
            x={30} y={550} width={310} height={350}
            {...strokeProps}
            strokeDasharray="1400"
            style={{ pathLength: p3 }}
          />
          {/* Inner building window lines */}
          <motion.line x1={130} y1={550} x2={130} y2={900} {...strokeProps} strokeDasharray="360" strokeOpacity={0.2} style={{ pathLength: p4 }} />
          <motion.line x1={230} y1={550} x2={230} y2={900} {...strokeProps} strokeDasharray="360" strokeOpacity={0.2} style={{ pathLength: p4 }} />

          {/* === LEFT: Cloud organic shapes === */}
          <motion.path
            d="M -50 300 Q 30 240 100 270 Q 110 200 190 220 Q 210 150 300 180 Q 340 110 420 160 Q 420 240 330 255 Q 310 310 210 295 Q 180 360 90 340 Q 40 400 -30 370 Z"
            {...strokeProps}
            strokeDasharray="2000"
            style={{ pathLength: p2 }}
          />

          {/* === TOP-CENTER: Vertical grid lines === */}
          {[450, 560, 670, 780].map((x, i) => (
            <motion.line
              key={i}
              x1={x} y1={0} x2={x} y2={240}
              {...strokeProps}
              strokeOpacity={0.15}
              strokeDasharray="240"
              style={{ pathLength: p1 }}
            />
          ))}
          {/* Horizontal cap */}
          <motion.line x1={450} y1={0} x2={780} y2={0} {...strokeProps} strokeOpacity={0.15} strokeDasharray="340" style={{ pathLength: p1 }} />

          {/* === RIGHT: Diagonal slash line === */}
          <motion.line
            x1={860} y1={0} x2={1536} y2={800}
            {...strokeProps}
            strokeOpacity={0.2}
            strokeDasharray="1500"
            style={{ pathLength: p3 }}
          />

          {/* === BOTTOM-RIGHT: Geometric step / ramp === */}
          <motion.path
            d="M 1100 900 L 1100 680 L 1250 680 L 1250 500 L 1450 500 L 1450 320 L 1536 320"
            {...strokeProps}
            strokeDasharray="1400"
            style={{ pathLength: p4 }}
          />

          {/* === RIGHT: Large filled arc === */}
          <motion.path
            d="M 1550 120 Q 1380 180 1400 380 Q 1420 580 1300 680"
            {...strokeProps}
            strokeDasharray="800"
            style={{ pathLength: p3 }}
          />

          {/* === CENTER: The horizontal hero line === */}
          <motion.line
            x1={0} y1={450} x2={1536} y2={450}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
            strokeDasharray="1536"
            style={{ pathLength: p1 }}
          />

          {/* === THE TRAVELING BALL (Zajno's signature dot) === */}
          {/* Outer ring */}
          <motion.circle
            cx={ballX}
            cy={ballY}
            r={10}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={1}
          />
          {/* Inner dot */}
          <motion.circle
            cx={ballX}
            cy={ballY}
            r={3.5}
            fill="rgba(255,255,255,0.8)"
          />
        </svg>

        {/* Floating Pills — scroll into viewport one by one */}
        {PILLS.map((pill, i) => {
          const IconComponent = pill.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: '-5%' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: pill.delay }}
              style={{
                position: 'absolute',
                left: pill.x,
                top: pill.y,
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#ffffff',
                borderRadius: '9999px',
                padding: '0.7rem 1.6rem',
                pointerEvents: 'none',
                zIndex: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {IconComponent && <IconComponent />}
              <span
                style={{
                  fontFamily: pill.isSkill ? 'var(--font-primary)' : 'Georgia, serif',
                  fontSize: pill.isSkill ? 'clamp(0.85rem, 2vw, 1.25rem)' : 'clamp(1rem, 2.5vw, 1.6rem)',
                  fontWeight: pill.isSkill ? 600 : 400,
                  color: '#050505',
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.01em',
                }}
              >
                {pill.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
