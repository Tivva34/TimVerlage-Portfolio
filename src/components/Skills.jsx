import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/skills.js";
import "../styles/Skills.css";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const headingMotion = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        viewport: { amount: 0.35 },
      };

  const cardMotion = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.3 },
          viewport: { amount: 0.3 },
        };

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "#6f16a3ff";
      case "Intermediate":
        return "#08c8eaff";
      case "Beginner":
        return "#429e30ff";
      default:
        return "#888";
    }
  };

  return (
    <section id="skills">
      <motion.h2 {...headingMotion}>Technical Skills</motion.h2>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3 className="skill-group-title">{group.title}</h3>

            <div className="skills-grid">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  {...cardMotion(index * 0.05)}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                  />

                  <h4>{skill.name}</h4>

                  <span
                    className="skill-level"
                    style={{ backgroundColor: getLevelColor(skill.level) }}
                  >
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}