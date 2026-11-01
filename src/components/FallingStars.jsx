import React from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * FallingStars:
 * Occasional, organic falling stars gliding diagonally across the night sky.
 * Positioned behind mountains and cabin foreground so they are visible only through
 * the transparent window opening.
 */
export function FallingStars({ isDark }) {
  const shouldReduceMotion = useReducedMotion();

  if (!isDark || shouldReduceMotion) return null;

  return (
    <div className="falling-stars-container" aria-hidden="true">
      <div className="falling-star star-1" />
      <div className="falling-star star-2" />
      <div className="falling-star star-3" />
    </div>
  );
}
