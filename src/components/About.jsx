import { motion, useReducedMotion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const boxMotion = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        viewport: { amount: 0.35, once: true },
      };

  const subBoxMotion = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.35 },
          viewport: { amount: 0.35, once: true },
        };

  /* Alchemical & Celestial Vector Emblems */
  const EmblemCrucible = ({ className = "" }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2.5" opacity="0.45" />
      <circle cx="24" cy="24" r="16.5" stroke="currentColor" strokeWidth="1.2" />
      <polygon points="24,8.5 36.5,30 11.5,30" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="1.75" fill="currentColor" />
      <line x1="24" y1="1.5" x2="24" y2="5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="24" y1="43" x2="24" y2="46.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="1.5" y1="24" x2="5" y2="24" stroke="currentColor" strokeWidth="1.2" />
      <line x1="43" y1="24" x2="46.5" y2="24" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24,4 L25.5,6.5 L24,9 L22.5,6.5 Z" fill="currentColor" opacity="0.85" />
    </svg>
  );

  const EmblemCompass = ({ className = "" }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M 14,24 A 10.5,10.5 0 0,1 34,24 A 10.5,10.5 0 0,1 14,24" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <polygon points="24,6 42,24 24,42 6,24" stroke="currentColor" strokeWidth="1.2" />
      <polygon points="24,13 33.5,24 24,35 14.5,24" stroke="currentColor" strokeWidth="1" opacity="0.75" />
      <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
      <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="24" cy="24" r="3.25" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="24" r="1.25" fill="currentColor" />
    </svg>
  );

  const EmblemAstrolabe = ({ className = "" }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="24" cy="24" rx="21" ry="8.5" transform="rotate(-32 24 24)" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2.5" opacity="0.65" />
      <ellipse cx="24" cy="24" rx="21" ry="8.5" transform="rotate(32 24 24)" stroke="currentColor" strokeWidth="1.1" />
      <path d="M15,15 A12,12 0 0,0 33,33" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4.75" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      <circle cx="39" cy="15" r="1.75" fill="currentColor" />
      <circle cx="9" cy="33" r="1.75" fill="currentColor" />
      <circle cx="24" cy="3" r="1.2" fill="currentColor" />
      <circle cx="24" cy="45" r="1.2" fill="currentColor" />
    </svg>
  );

  const EmblemPolaris = ({ className = "" }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2.5" opacity="0.45" />
      <path d="M24,8 A16,16 0 1,1 10,32 A12,12 0 1,1 24,14 A8,8 0 1,1 19,27" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="24" y1="4" x2="24" y2="15" stroke="currentColor" strokeWidth="1.2" />
      <path d="M24,17 L25.5,21.5 L30,23 L25.5,24.5 L24,29 L22.5,24.5 L18,23 L22.5,21.5 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="24" cy="23" r="1.5" fill="currentColor" />
      <circle cx="24" cy="3.5" r="1.25" fill="currentColor" />
      <circle cx="37" cy="11" r="1" fill="currentColor" opacity="0.75" />
      <circle cx="11" cy="37" r="1" fill="currentColor" opacity="0.75" />
    </svg>
  );

  const CelestialWatermark = () => (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="bring-card-watermark" aria-hidden="true">
      <circle cx="80" cy="80" r="74" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
      <circle cx="80" cy="80" r="56" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="80" cy="80" r="38" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 2" />
      <circle cx="80" cy="80" r="20" stroke="currentColor" strokeWidth="0.6" />
      <polygon points="80,6 144,43 144,117 80,154 16,117 16,43" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
      <line x1="80" y1="0" x2="80" y2="160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="0" y1="80" x2="160" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      <path d="M80,24 L81.5,28.5 L86,30 L81.5,31.5 L80,36 L78.5,31.5 L74,30 L78.5,28.5 Z" fill="currentColor" opacity="0.6" />
    </svg>
  );

  const bringCards = [
    {
      glyph: "🜔",
      sigilTag: "OPUS I · SYNTHESIS",
      title: "Modern Tech Stack",
      text: "Proficient in React, JavaScript (ES6+), and modern tools. I stay current with best practices and emerging technologies.",
      icon: <EmblemCrucible className="bring-emblem-svg" />,
      coord: "45° 18' N",
    },
    {
      glyph: "🜍",
      sigilTag: "OPUS II · ANALYSIS",
      title: "Problem-Solving Mindset",
      text: "I approach challenges methodically, breaking complex requirements into manageable solutions.",
      icon: <EmblemCompass className="bring-emblem-svg" />,
      coord: "12° 44' E",
    },
    {
      glyph: "🜁",
      sigilTag: "OPUS III · HARMONIA",
      title: "User-Focused Design",
      text: "I prioritize responsive design and user experience across all devices and platforms.",
      icon: <EmblemAstrolabe className="bring-emblem-svg" />,
      coord: "28° 33' S",
    },
    {
      glyph: "🜂",
      sigilTag: "OPUS IV · EVOLUTIO",
      title: "Growth-Oriented",
      text: "I seek feedback, embrace challenges, and thrive in collaborative development environments.",
      icon: <EmblemPolaris className="bring-emblem-svg" />,
      coord: "60° 11' W",
    },
  ];

  return (
    <section id="about" className="bring-section" aria-labelledby="about-title">
      <motion.article 
        className="about-box" 
        {...boxMotion}
      >
        {/* Celestial Depth Watermark */}
        <CelestialWatermark />

        {/* Antique Geometric Corner Frame */}
        <div className="about-box-frame" aria-hidden="true">
          <span className="about-corner corner-tl" />
          <span className="about-corner corner-tr" />
          <span className="about-corner corner-bl" />
          <span className="about-corner corner-br" />
        </div>

        {/* Editorial Sigil Badge */}
        <div className="about-sigil-badge">
          <span className="about-sigil-glyph" aria-hidden="true">🜃</span>
          <span className="about-sigil-tag">CHRONICLE · BIOGRAPHY</span>
        </div>

        <h2 id="about-title">About Me</h2>

        <p>
          I recently graduated from a two-year web development program, where
          I built a strong foundation in modern frontend development, backend development, and database management. 
          I have hands-on experience with responsive design, API integration, and creating thoughtful user
          experiences.
        </p>

        <p>
          My programming journey began with indie game development studies,
          where I developed a solid understanding of object-oriented
          programming, C#, Unity, and problem-solving. That background now
          shapes how I approach web development: with curiosity, structure,
          and a focus on building useful experiences.
        </p>

        <ul className="about-subgrid" aria-label="Current focus areas">
          <motion.li className="about-subbox" {...subBoxMotion()}>
            <span className="about-subbox-pip" aria-hidden="true">✦</span>
            <span>
              I'm currently deepening my React skills — working with component
              architecture, API integration, and performance optimization.
            </span>
          </motion.li>

          <motion.li className="about-subbox" {...subBoxMotion(0.2)}>
            <span className="about-subbox-pip" aria-hidden="true">✦</span>
            <span>
              I'm learning backend integration with Node.js to expand full-stack
              capabilities.
            </span>
          </motion.li>
        </ul>
      </motion.article>

      <section className="bring-grid" aria-label="What I bring">
        {bringCards.map((card, index) => (
          <motion.article
            className="bring-card"
            key={card.title}
            tabIndex={0}
            {...(shouldReduceMotion
              ? { initial: false }
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.06 * index, duration: 0.4 },
                  viewport: { amount: 0, once: false },
                })}
          >
            {/* Celestial Watermark Depth */}
            <CelestialWatermark />

            {/* Antique Geometric Corner Frame */}
            <div className="bring-card-frame" aria-hidden="true">
              <span className="bring-corner corner-tl" />
              <span className="bring-corner corner-tr" />
              <span className="bring-corner corner-bl" />
              <span className="bring-corner corner-br" />
            </div>

            {/* Header: Sigil Tag & Sacred Emblem */}
            <header className="bring-card-header">
              <div className="bring-sigil-badge">
                <span className="bring-sigil-glyph" aria-hidden="true">{card.glyph}</span>
                <span className="bring-sigil-tag">{card.sigilTag}</span>
              </div>
              <div className="bring-emblem-wrap" aria-hidden="true">
                {card.icon}
              </div>
            </header>

            {/* Content: Title & Text */}
            <div className="bring-card-body">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>

            {/* Footer: Astrological Coordinate & Star Pip */}
            <footer className="bring-card-footer" aria-hidden="true">
              <span className="celestial-coord">{card.coord}</span>
              <span className="celestial-divider-line" />
              <span className="celestial-pip">✦</span>
            </footer>
          </motion.article>
        ))}
      </section>
    </section>
  );
}

