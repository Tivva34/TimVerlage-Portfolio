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

  const bringCards = [
    {
      title: "Modern Tech Stack",
      text: "Proficient in React, JavaScript (ES6+), and modern tools. I stay current with best practices and emerging technologies.",
    },
    {
      title: "Problem-Solving Mindset",
      text: "I approach challenges methodically, breaking complex requirements into manageable solutions.",
    },
    {
      title: "User-Focused Design",
      text: "I prioritize responsive design and user experience across all devices and platforms.",
    },
    {
      title: "Growth-Oriented",
      text: "I seek feedback, embrace challenges, and thrive in collaborative development environments.",
    },
  ];

  return (
    <section id="about" className="bring-section" aria-labelledby="about-title">
      <motion.article className="about-box" {...boxMotion}>
        <h2 id="about-title">About Me</h2>

        <p>
          My programming journey began in 2020 during game development studies,
          where I discovered my passion for solving problems through code. This
          led me to focus on web development, crafting meaningful user
          experiences using modern frontend technologies.
        </p>

        <ul className="about-subgrid" aria-label="Current focus areas">
          <motion.li className="about-subbox" {...subBoxMotion()}>
            I'm currently deepening my React skills — working with component
            architecture, API integration, and performance optimization.
          </motion.li>

          <motion.li className="about-subbox" {...subBoxMotion(0.2)}>
            I'm learning backend integration with Node.js to expand full-stack
            capabilities.
          </motion.li>
        </ul>
      </motion.article>

      <section className="bring-grid" aria-label="What I bring">
        {bringCards.map((card, index) => (
          <motion.article
            className="bring-card"
            key={card.title}
            {...(shouldReduceMotion
              ? { initial: false }
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.05 * index, duration: 0.35 },
                  viewport: { amount: 0.35 },
                })}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.article>
        ))}
      </section>
    </section>
  );
}