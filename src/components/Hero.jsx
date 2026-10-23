import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FirefliesSwarm } from './FirefliesSwarm';
import { FallingStars } from './FallingStars';
import '../styles/Hero.css';

export default function Hero() {
  const { isDark } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  // GemAI-inspired continuous 360-degree celestial sky rotation
  // Each theme transition completes a full 360-degree clockwise revolution,
  // traveling smoothly through all angles and always settling upright.
  const [cycleCount, setCycleCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setCycleCount((prev) => prev + 1);
  }, [isDark]);

  // Parallax layer references for mouse interaction
  const skyLayerRef = useRef(null);
  const mountainLayerRef = useRef(null);
  const forestLayerRef = useRef(null);
  const firefliesLayerRef = useRef(null);
  const cabinLayerRef = useRef(null);
  const foregroundLayerRef = useRef(null);
  const contentLayerRef = useRef(null);

  useEffect(() => {
    const isDesktopPointer = () => {
      if (typeof window === 'undefined') return false;
      const isWide = window.innerWidth > 900;
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const canHover = window.matchMedia('(hover: hover)').matches;
      return isWide && hasFinePointer && canHover;
    };

    const resetLayerTransforms = () => {
      [
        skyLayerRef,
        mountainLayerRef,
        forestLayerRef,
        firefliesLayerRef,
        cabinLayerRef,
        foregroundLayerRef,
        contentLayerRef,
      ].forEach((ref) => {
        if (ref.current) {
          ref.current.style.transform = '';
        }
      });
    };

    if (shouldReduceMotion || !isDesktopPointer()) {
      resetLayerTransforms();
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const onMouseMove = (e) => {
      if (!isDesktopPointer()) return;
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      if (!isDesktopPointer()) {
        resetLayerTransforms();
        return;
      }

      currentX = lerp(currentX, targetX, 0.045);
      currentY = lerp(currentY, targetY, 0.045);

      // Layer 1: Sky - slowest drift (furthest depth, ~6px)
      if (skyLayerRef.current) {
        skyLayerRef.current.style.transform = `translate3d(${currentX * -6}px, ${currentY * -4}px, 0)`;
      }

      // Layer 2: Mountain silhouette - distant middle ground (~14px)
      if (mountainLayerRef.current) {
        mountainLayerRef.current.style.transform = `translate3d(${currentX * -14}px, ${currentY * -9}px, 0)`;
      }

      // Layer 3: Forest - nearer foreground (~24px)
      if (forestLayerRef.current) {
        forestLayerRef.current.style.transform = `translate3d(${currentX * -24}px, ${currentY * -14}px, 0)`;
      }

      // Outdoor particles drift between forest and window glass (~30px)
      if (firefliesLayerRef.current) {
        firefliesLayerRef.current.style.transform = `translate3d(${currentX * -30}px, ${currentY * -16}px, 0)`;
      }

      // Layer 4: Cozy Cabin - closest foreground (~36px)
      if (cabinLayerRef.current) {
        cabinLayerRef.current.style.transform = `translate3d(${currentX * -36}px, ${currentY * -18}px, 0)`;
      }

      // Layer 5: Foreground lens & ambient vignette - subtle counter float (+18px)
      if (foregroundLayerRef.current) {
        foregroundLayerRef.current.style.transform = `translate3d(${currentX * 18}px, ${currentY * 12}px, 0)`;
      }

      // Layer 6: Typographic content layer - gentle elevation float (+10px)
      if (contentLayerRef.current) {
        contentLayerRef.current.style.transform = `translate3d(${currentX * 10}px, ${currentY * 6}px, 0)`;
      }

      rafId = requestAnimationFrame(updateParallax);
    };

    const handleResize = () => {
      if (!isDesktopPointer()) {
        resetLayerTransforms();
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      } else if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    rafId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
      resetLayerTransforms();
    };
  }, [shouldReduceMotion]);

  // Entrance animations for typography & CTA
  const fadeUpVariant = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
      };

  // Debug review workflow: easily hide hero content card via URL param (?hideHeroContent=true) or console
  const [hideHeroContent, setHideHeroContent] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).get('hideHeroContent') === 'true';
  });

  useEffect(() => {
    window.__toggleHeroCard = () => setHideHeroContent((prev) => !prev);
    return () => {
      delete window.__toggleHeroCard;
    };
  }, []);

  const isMobileViewport = typeof window !== 'undefined' && window.innerWidth <= 768;
  const rotationDuration = shouldReduceMotion ? 0.3 : (isMobileViewport ? 1.4 : 2.2);

  return (
    <header id="home" className={`home-hero ${isDark ? 'dark' : 'light'}`} ref={heroRef}>
      {/* ============================================================ */}
      {/* LAYER 1: FULL-SCREEN SKY BACKGROUND (Rotating Sky Dome)       */}
      {/* Continuous 360-degree celestial rotation adapted from GemAI  */}
      {/* ============================================================ */}
      <div className="forest-parallax-layer layer-sky-image-wrap" ref={skyLayerRef} aria-hidden="true">
        <div className="sky-dome-anchor">
          <motion.div
            className="sky-dome-rotator"
            initial={false}
            animate={{
              rotate: shouldReduceMotion ? 0 : cycleCount * 360,
            }}
            transition={{
              duration: rotationDuration,
              ease: [0.16, 1, 0.3, 1], // GemAI cinematic smooth ease
            }}
          >
            {/* Daytime Sky Texture */}
            <div className={`sky-texture-panel sky-day-panel ${!isDark ? 'visible' : ''}`}>
              <img
                src={`${import.meta.env.BASE_URL}hero/sky-day-dome-v2.webp`}
                alt=""
                className="hero-layer-img sky-img sky-day-img"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Nighttime Sky Texture */}
            <div className={`sky-texture-panel sky-night-panel ${isDark ? 'visible' : ''}`}>
              <img
                src={`${import.meta.env.BASE_URL}hero/sky-night-dome-v4.webp`}
                alt=""
                className="hero-layer-img sky-img sky-night-img"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Sky Atmospheric Effects: Stationary with respect to the panoramic window, in front of sky dome but behind mountains */}
        <div className="sky-effects-wrap">
          <FallingStars isDark={isDark} />
        </div>
      </div>

      {/* ============================================================ */}
      {/* LAYER 2: MOUNTAIN SILHOUETTE (Transparent PNG/WebP)          */}
      {/* ============================================================ */}
      <div className="forest-parallax-layer layer-mountain-wrap" ref={mountainLayerRef} aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}hero/mountain-day.webp`}
          alt=""
          className={`hero-layer-img mountain-img mountain-day-img ${!isDark ? 'visible' : ''}`}
          loading="eager"
          decoding="async"
        />
        <img
          src={`${import.meta.env.BASE_URL}hero/mountain-night-v2.webp`}
          alt=""
          className={`hero-layer-img mountain-img mountain-night-img ${isDark ? 'visible' : ''}`}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ============================================================ */}
      {/* LAYER 3: DENSE FOREST (Transparent PNG/WebP)                  */}
      {/* ============================================================ */}
      <div className="forest-parallax-layer layer-forest-wrap" ref={forestLayerRef} aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}hero/forest-day.webp`}
          alt=""
          className={`hero-layer-img forest-img forest-day-img ${!isDark ? 'visible' : ''}`}
          loading="eager"
          decoding="async"
        />
        <img
          src={`${import.meta.env.BASE_URL}hero/forest-night.webp`}
          alt=""
          className={`hero-layer-img forest-img forest-night-img ${isDark ? 'visible' : ''}`}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ============================================================ */}
      {/* ATMOSPHERIC FIREFLIES SWARM (Floating outdoor particles)     */}
      {/* Positioned outdoors: behind cabin layer (z-index 4 vs 5)     */}
      {/* Strictly dark-mode only with clean fade transitions          */}
      {/* ============================================================ */}
      <div className="forest-parallax-layer layer-fireflies-wrap" ref={firefliesLayerRef} aria-hidden="true">
        <AnimatePresence>
          {isDark && <FirefliesSwarm isDark={isDark} />}
        </AnimatePresence>
      </div>

      {/* ============================================================ */}
      {/* LAYER 4: COZY WOODLAND CABIN (Transparent PNG/WebP)           */}
      {/* ============================================================ */}
      <div className="forest-parallax-layer layer-cabin-wrap" ref={cabinLayerRef} aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}Images/Original/Tower-Final/Tower-day-perfect.png`}
          alt=""
          className={`hero-layer-img cabin-img cabin-day-img ${!isDark ? 'visible' : ''}`}
          loading="eager"
          decoding="async"
        />
        <img
          src={`${import.meta.env.BASE_URL}Images/Original/Tower-Final/Tower-night-perfect.png`}
          alt=""
          className={`hero-layer-img cabin-img cabin-night-img ${isDark ? 'visible' : ''}`}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ============================================================ */}
      {/* FOREGROUND VIGNETTE & LENS DEPTH                             */}
      {/* ============================================================ */}
      <div className="forest-parallax-layer layer-lens-foreground" ref={foregroundLayerRef} aria-hidden="true">
        <div className="ambient-forest-shadow-veil" />
      </div>

      {/* ============================================================ */}
      {/* HERO CONTENT & TYPOGRAPHY                                    */}
      {/* Balanced text placement with subtle dark gradient backing    */}
      {/* ============================================================ */}
      <div className={`Hero-content-Container ${hideHeroContent ? 'hero-card-debug-hidden' : ''}`} ref={contentLayerRef}>
        {/* Backdrop card scrim to guarantee flawless readability */}
        <div className="content-scrim-veil" aria-hidden="true" />

        <motion.div className="forest-badge-pill" {...fadeUpVariant(0.1)}>
          <span className="forest-badge-text">Frontend &amp; Fullstack Developer</span>
        </motion.div>

        <motion.h1 className="forest-headline" {...fadeUpVariant(0.2)}>
          <span className="forest-name-golden">Tim Verlage</span>
        </motion.h1>

        <motion.p className="forest-subtitle" {...fadeUpVariant(0.3)}>
          Building immersive, accessible, and high-performance digital experiences with craftsmanship, atmosphere, and clean code.
        </motion.p>

        <motion.nav className="forest-actions" aria-label="Hero actions" {...fadeUpVariant(0.4)}>
          <a href="#projects" className="forest-btn forest-btn-primary">
            <span>Explore Projects</span>
          </a>

          <a href="#contact" className="forest-btn forest-btn-secondary">
            <span>Get in Touch</span>
          </a>
        </motion.nav>
      </div>

      {/* Decorative Bottom Separator Beam */}
      <div className="forest-bottom-divider" aria-hidden="true" />
    </header>
  );
}