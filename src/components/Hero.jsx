import { motion, useReducedMotion } from "framer-motion";
import "../styles/animation.css";
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const headingMotion = shouldReduceMotion
    ? { initial: false }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };

  const textMotion = shouldReduceMotion
    ? { initial: false }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.1, duration: 0.45 } };

  const ctaMotion = shouldReduceMotion
    ? { initial: false }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.18, duration: 0.45 } };

  return (
    <section id="home" className="hero">
      <div className="simple-stars" aria-hidden="true">
  <div className="star" style={{top: '12%', left: '18%'}}></div>
  <div className="star" style={{top: '28%', left: '70%'}}></div>
  <div className="star" style={{top: '55%', left: '30%'}}></div>
  <div className="star" style={{top: '65%', left: '80%'}}></div>
  <div className="star" style={{top: '80%', left: '50%'}}></div>
  <div className="star" style={{top: '40%', left: '10%'}}></div>
  <div className="star" style={{top: '20%', left: '40%'}}></div>
  <div className="star" style={{top: '60%', left: '60%'}}></div>
  <div className="star" style={{top: '75%', left: '20%'}}></div>
  <div className="star" style={{top: '35%', left: '80%'}}></div>
  <div className="star" style={{top: '50%', left: '60%'}}></div>
  <div className="star" style={{top: '15%', left: '60%'}}></div>
  <div className="star" style={{top: '10%', left: '30%'}}></div>
  <div className="star" style={{top: '22%', left: '55%'}}></div>
  <div className="star" style={{top: '33%', left: '75%'}}></div>
  <div className="star" style={{top: '44%', left: '25%'}}></div>
  <div className="star" style={{top: '58%', left: '15%'}}></div>
  <div className="star" style={{top: '68%', left: '45%'}}></div>
  <div className="star" style={{top: '82%', left: '70%'}}></div>
  <div className="star" style={{top: '90%', left: '35%'}}></div>
      </div>
      <motion.h1
        {...headingMotion}
      >
        Frontend Developer & Problem Solver
      </motion.h1>
      <motion.p
        {...textMotion}
      >
        Hi, I'm Tim — a passionate frontend developer specializing in React and
        modern web technologies. I transform ideas into engaging, responsive web
        experiences while continuously expanding my technical expertise.
      </motion.p>
      <motion.div
        className="hero-cta"
        {...ctaMotion}
      >
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </motion.div>
    </section>
  );
}