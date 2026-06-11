import { motion, useReducedMotion } from "framer-motion";

const skills = [
  {
    name: "JavaScript",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HTML5",
    level: "Advanced",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Node.js",
    level: "Beginner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "C#",
    level: "Intermediate",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Python",
    level: "Beginner",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const headingMotion = shouldReduceMotion
    ? { initial: false }
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.35 }, viewport: { amount: 0.35 } };

  const cardMotion = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { delay, duration: 0.3 }, viewport: { amount: 0.3 } };

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
      <motion.h2
        {...headingMotion}
      >
        Core Technologies
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            {...cardMotion(index * 0.05)}
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <h3>{skill.name}</h3>
            <span
              className="skill-level"
              style={{ backgroundColor: getLevelColor(skill.level) }}
            >
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>


    </section>
  );
}