import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MysticLabel from "./MysticLabel.jsx";
import "../styles/About.css";

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

/**
 * AspectusCard - Individual About Aspect Card
 * Tracks hover state across the entire outer card container, triggering
 * the self-translating label seamlessly without nested event collisions.
 */
function AspectusCard({ card, index, shouldReduceMotion }) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.article
      className="bring-card"
      key={card.title}
      tabIndex={0}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      onFocus={() => setIsCardHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsCardHovered(false);
        }
      }}
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
        <MysticLabel
          defaultText={card.sigilDefault}
          revealText={card.sigilReveal}
          glyph={card.glyph}
          className="bring-sigil-badge"
          glyphClassName="bring-sigil-glyph"
          tagClassName="bring-sigil-tag"
          cardHovered={isCardHovered}
        />
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
  );
}

export default function About() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
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

  const bringCards = [
    {
      glyph: "🜔",
      sigilDefault: "ASPECTUS I · SYNTHESIS",
      sigilReveal: "TECHNICAL CRAFT",
      title: "Modern Tech Stack",
      text: "I work with React, JavaScript, and modern development tools, continually exploring better ways to build and integrate applications.",
      icon: <EmblemCrucible className="bring-emblem-svg" />,
      coord: "45° 18' N",
    },
    {
      glyph: "🜍",
      sigilDefault: "ASPECTUS II · ANALYSIS",
      sigilReveal: "PROBLEM-SOLVING",
      title: "Problem-Solving Mindset",
      text: "I break complex challenges into manageable pieces, question existing assumptions, and look for practical solutions that actually solve the problem.",
      icon: <EmblemCompass className="bring-emblem-svg" />,
      coord: "12° 44' E",
    },
    {
      glyph: "🜁",
      sigilDefault: "ASPECTUS III · HARMONIA",
      sigilReveal: "USER EXPERIENCE",
      title: "User-Focused Design",
      text: "I care about how things feel to use, not just how they work. Responsive layouts, clear interactions, and thoughtful user experiences matter.",
      icon: <EmblemAstrolabe className="bring-emblem-svg" />,
      coord: "28° 33' S",
    },
    {
      glyph: "🜂",
      sigilDefault: "ASPECTUS IV · EVOLUTIO",
      sigilReveal: "CONTINUOUS GROWTH",
      title: "Always Evolving",
      text: "I'm always experimenting with new tools, learning new approaches, and refining my workflow. There's usually another way to make something better.",
      icon: <EmblemPolaris className="bring-emblem-svg" />,
      coord: "60° 11' W",
    },
  ];

  return (
    <section id="about" className="bring-section" aria-labelledby="about-title">
      <motion.article
        className="about-box"
        onMouseEnter={() => setIsAboutHovered(true)}
        onMouseLeave={() => setIsAboutHovered(false)}
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
        <MysticLabel
          defaultText="CHRONICLE · BIOGRAPHY"
          revealText="PERSONAL · PROFILE"
          glyph="🜃"
          className="about-sigil-badge"
          glyphClassName="about-sigil-glyph"
          tagClassName="about-sigil-tag"
          cardHovered={isAboutHovered}
        />

        <h2 id="about-title">Driven by Curiosity</h2>

        <div className="about-narrative-group">
          <div className="about-narrative-block">
            <span className="about-block-eyebrow">THE MINDSET</span>
            <p>
              I'm fascinated by what's possible. Give me an app, a website, or a system, and I'll find something to question, improve, or build differently. One idea leads to another, and curiosity rarely lets me leave things alone.
            </p>
          </div>

          <div className="about-narrative-block">
            <span className="about-block-eyebrow">THE ORIGIN</span>
            <p>
              My journey began with C# and indie game development, exploring object-oriented programming and the art of building interactive worlds. From there, I ventured into web development, expanding my craft across JavaScript, TypeScript, React, APIs, cloud technologies, and beyond.
            </p>
          </div>
        </div>

        <ul className="about-subgrid" aria-label="Core philosophy and evidence">
          <motion.li className="about-subbox" {...subBoxMotion()}>
            <span className="about-subbox-pip" aria-hidden="true">✦</span>
            <div className="about-subbox-content">
              <span className="about-block-eyebrow">THE PROOF</span>
              <p>
                I like figuring out where things fall short and finding ways to make them better. From rethinking business websites to building full-stack applications with admin panels, email integrations, and access control, I turn ideas into working solutions.
              </p>
            </div>
          </motion.li>

          <motion.li className="about-subbox" {...subBoxMotion(0.2)}>
            <span className="about-subbox-pip" aria-hidden="true">✦</span>
            <div className="about-subbox-content">
              <span className="about-block-eyebrow">THE OBSESSION</span>
              <p>
                I'm always experimenting with new tools, workflows, and ways to build. Lately, that includes agentic coding - exploring how AI-assisted development can change the way I turn ideas into applications.
              </p>
            </div>
          </motion.li>
        </ul>

        <footer className="about-signature-block">
          <span className="about-block-eyebrow">THE SIGNATURE</span>
          <p className="about-signature-credo">
            There's always something worth improving — or something new worth building.
          </p>
        </footer>
      </motion.article>

      <section className="bring-grid" aria-label="What I bring">
        {bringCards.map((card, index) => (
          <AspectusCard
            key={card.title}
            card={card}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </section>
    </section>
  );
}
