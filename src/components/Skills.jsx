import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import MysticLabel from "./MysticLabel.jsx";
import { skillGroups } from "../data/skills.js";
import "../styles/Skills.css";

function ToolChip({ tool }) {
  return (
    <div
      className="tool-chip"
      tabIndex={0}
      role="group"
      aria-label={tool.name}
    >
      <div className="tool-chip-icon">
        <img
          src={tool.logo}
          alt=""
          aria-hidden="true"
          className="tool-chip-img"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="tool-chip-name">{tool.name}</span>
    </div>
  );
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  // Flatten all 26 tools from existing skillGroups data
  const allSkills = useMemo(() => {
    return skillGroups.flatMap((group) =>
      group.skills.map((skill) => ({
        ...skill,
        category: group.title,
      }))
    );
  }, []);

  // Split into two balanced, visually engaging rows (13 tools per row)
  const row1 = useMemo(() => allSkills.slice(0, 13), [allSkills]);
  const row2 = useMemo(() => allSkills.slice(13), [allSkills]);

  return (
    <section id="skills" className="skills-section">
      {/* Brand Header Hub featuring the official V3.webp logo with celestial framing */}
      <div className="skills-header-hub">
        <MysticLabel
          defaultText="INDEX · ARSENAL"
          revealText="SKILLS · TOOLKIT"
          glyph="🜁"
          className="skills-sigil-badge"
          glyphClassName="skills-sigil-glyph"
          tagClassName="skills-sigil-tag"
        />

        <div className="skills-brand-badge-container">
          <div className="skills-celestial-orbit orbit-outer" aria-hidden="true" />
          <div className="skills-celestial-orbit orbit-inner" aria-hidden="true" />
          <div className="skills-brand-badge" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}Images/Logo/V3.webp`}
              alt=""
              className="skills-hub-logo"
              width="46"
              height="46"
              loading="lazy"
              decoding="async"
            />
            <div className="skills-hub-glow" />
          </div>
        </div>

        <h2 className="skills-title">Technical Skills &amp; Tools</h2>
        <p className="skills-subtitle">
          A growing collection of the languages, frameworks, platforms, and tools I use to build, experiment, and bring ideas to life.
        </p>
      </div>

      {shouldReduceMotion ? (
        /* Static, accessible layout for users with prefers-reduced-motion */
        <div className="skills-static-grid" role="region" aria-label="Technical skills overview">
          {allSkills.map((tool) => (
            <ToolChip key={tool.name} tool={tool} />
          ))}
        </div>
      ) : (
        /* Dual-Row Continuous Infinite Marquee */
        <div className="skills-marquee-container" aria-label="Continuous technical skills marquee">
          {/* Row 1: Smoothly scrolling to the LEFT */}
          <div className="skills-marquee-row" role="region" aria-label="Languages & Core Technologies">
            <div className="skills-marquee-track track-left">
              <div className="marquee-group">
                {row1.map((tool) => (
                  <ToolChip key={`r1-g1-${tool.name}`} tool={tool} />
                ))}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {row1.map((tool) => (
                  <ToolChip key={`r1-g2-${tool.name}`} tool={tool} />
                ))}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {row1.map((tool) => (
                  <ToolChip key={`r1-g3-${tool.name}`} tool={tool} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Smoothly scrolling to the RIGHT in opposite direction */}
          <div className="skills-marquee-row" role="region" aria-label="Tools & Modern Stack">
            <div className="skills-marquee-track track-right">
              <div className="marquee-group">
                {row2.map((tool) => (
                  <ToolChip key={`r2-g1-${tool.name}`} tool={tool} />
                ))}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {row2.map((tool) => (
                  <ToolChip key={`r2-g2-${tool.name}`} tool={tool} />
                ))}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {row2.map((tool) => (
                  <ToolChip key={`r2-g3-${tool.name}`} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
