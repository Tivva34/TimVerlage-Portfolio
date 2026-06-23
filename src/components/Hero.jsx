import { motion, useReducedMotion } from "framer-motion";
import { stars } from "../data/stars.js";

import "../styles/Hero.css";
import "../styles/animation.css";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const headingMotion = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45 },
      };

  const textMotion = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          delay: 0.1,
          duration: 0.45,
        },
      };

  const ctaMotion = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          delay: 0.2,
          duration: 0.45,
        },
      };

  return (
    <header id="home" className="hero">
      <ul className="simple-stars" aria-hidden="true">
        {stars.map(([top, left], index) => (
          <li
            key={`${top}-${left}-${index}`}
            className="star"
            style={{ top, left }}
          />
        ))}
      </ul>

      <motion.div className="hero-badge" {...textMotion}>
        Frontend Developer
      </motion.div>

      <motion.h1 {...headingMotion}>
        <span className="hero-name">Tim Verlage</span>
      </motion.h1>

      <motion.p className="hero-intro" {...textMotion}>
        Building modern, responsive and accessible web experiences.
      </motion.p>

      <motion.nav
        className="hero-cta"
        aria-label="Hero actions"
        {...ctaMotion}
      >
        <a href="#projects" className="btn-primary">
          View My Work
        </a>

        <a href="#contact" className="btn-outline">
          Contact Me
        </a>
      </motion.nav>
    </header>
  );
}