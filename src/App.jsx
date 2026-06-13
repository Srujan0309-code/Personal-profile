import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import LineArtBackground from './components/LineArtBackground';
import ZajnoHeroIntro from './components/ZajnoHeroIntro';
import FloatingPillsScene from './components/FloatingPillsScene';
import ZajnoGiantHeading from './components/ZajnoGiantHeading';
import HorizontalScrollProjects from './components/HorizontalScrollProjects';
import ZajnoTextReveal from './components/ZajnoTextReveal';
import CloudTransition from './components/CloudTransition';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <CustomCursor />
      <Preloader onLoadComplete={() => setLoading(false)} />

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative' }}
        >
          {/* Fixed SVG line art behind dark sections */}
          <LineArtBackground />

          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main style={{ position: 'relative', zIndex: 1 }}>
            {/* ══ 1. HERO ══ */}
            <Hero />

            {/* ══ 2. ZAJNO HERO BALL — horizontal line + circle ══ */}
            <ZajnoHeroIntro
              quote="Integrating cognitive intelligence with elegant fluid interaction to bridge the gap between complex machine learning and human experience."
            />

            {/* ══ 3. FLOATING PILLS SCENE — architectural SVG line art + pill bubbles ══ */}
            <FloatingPillsScene />

            {/* ══ CLOUD TRANSITION — dark → lavender/light (screenshot 1 style) ══ */}
            <CloudTransition from="#050505" to="#e8e4f0" showEyes={true} />

            {/* ══ 4. GIANT HEADING — on lavender ══ */}
            <ZajnoGiantHeading
              line1="Srujan"
              line2="Poojari"
              subtitle="The Developer"
              bgColor="#e8e4f0"
              textColor="#050505"
            />

            {/* ══ CLOUD TRANSITION — lavender → off-white (same light section continues) ══ */}
            <CloudTransition from="#e8e4f0" to="#f5f3ee" />

            {/* ══ 5. ABOUT — on off-white background ══ */}
            <div style={{ backgroundColor: '#f5f3ee', position: 'relative', zIndex: 1 }}>
              <About />
            </div>

            {/* ══ CLOUD TRANSITION — off-white → dark ══ */}
            <CloudTransition from="#f5f3ee" to="#050505" flip />

            {/* ══ 6. TEXT REVEAL BRIDGE — back to dark ══ */}
            <ZajnoTextReveal
              smallText="Technical Expertise"
              text="Mastering the intersection of Machine Learning Computer Vision and Full-Stack Engineering"
            />

            {/* ══ 7. SKILLS ══ */}
            <Skills />

            {/* ══ CLOUD TRANSITION — dark → dark-mid (subtle) before giant heading ══ */}
            <CloudTransition from="#050505" to="#0e0e0e" />

            {/* ══ 8. GIANT HEADING for Projects ══ */}
            <ZajnoGiantHeading
              line1="Featured"
              line2="Projects"
              subtitle="Selected Work"
              bgColor="#0e0e0e"
              textColor="#ffffff"
            />

            {/* ══ CLOUD TRANSITION — dark → off-white for horizontal cards ══ */}
            <CloudTransition from="#0e0e0e" to="#f5f3ee" />

            {/* ══ 9. HORIZONTAL SCROLL PROJECTS ══ */}
            <HorizontalScrollProjects />

            {/* ══ CLOUD TRANSITION — off-white → dark for education ══ */}
            <CloudTransition from="#f5f3ee" to="#050505" flip />

            {/* ══ 10. EDUCATION ══ */}
            <Education />

            {/* ══ 11. TEXT REVEAL ══ */}
            <ZajnoTextReveal
              smallText="Recognition"
              text="Milestones and achievements that define the journey so far"
            />

            {/* ══ 12. ACHIEVEMENTS ══ */}
            <Achievements />

            {/* ══ CLOUD TRANSITION — dark → near-black for contact ══ */}
            <CloudTransition from="#050505" to="#0e0e0e" />

            {/* ══ 13. CONTACT ══ */}
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
