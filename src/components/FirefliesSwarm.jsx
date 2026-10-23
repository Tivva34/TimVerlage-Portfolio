import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * FirefliesSwarm:
 * Floating, pulsating golden-amber fireflies drifting organically through the woodland scene,
 * creating an enchanted, cozy indie game atmosphere.
 */
export function FirefliesSwarm({ isDark }) {
  const shouldReduceMotion = useReducedMotion();

  const fireflies = useMemo(() => {
    // Reduced from 28 to 12 fireflies (~43% of original) for an elegant, subtle atmosphere
    return Array.from({ length: 12 }, (_, i) => {
      // Natural distribution framed by the panoramic window opening (~29% to 81% X, ~18% to 60% Y)
      const x = ((i * 31 + 17) % 52) + 29; // 29% to 81%
      const y = ((i * 23 + 29) % 42) + 18; // 18% to 60% window outdoor region
      const size = 3 + (i % 4) * 1.5;
      const duration = 6 + (i % 5) * 2;
      const delay = (i % 8) * 0.7;
      const driftX = (i % 2 === 0 ? 1 : -1) * (18 + (i % 4) * 8);
      const driftY = (i % 3 === 0 ? -1 : 1) * (14 + (i % 5) * 6);

      return {
        id: i,
        x: `${x}%`,
        y: `${y}%`,
        size,
        duration,
        delay,
        driftX,
        driftY,
      };
    });
  }, []);

  // Fireflies are strictly for dark mode night atmosphere
  // Disabling completely in light mode eliminates all animation work & GPU overhead
  if (!isDark || shouldReduceMotion) return null;

  return (
    <motion.div
      className="fireflies-swarm-layer dark"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {fireflies.map((f) => (
        <motion.div
          key={f.id}
          className="firefly-particle"
          style={{
            left: f.x,
            top: f.y,
            width: `${f.size}px`,
            height: `${f.size}px`,
          }}
          animate={{
            x: [0, f.driftX, f.driftX * 0.5, 0],
            y: [0, f.driftY, f.driftY * -0.6, 0],
            opacity: [0.2, 0.95, 0.35, 0.85, 0.2],
            scale: [0.8, 1.25, 0.9, 1.15, 0.8],
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: f.delay,
          }}
        >
          <span className="firefly-glow-halo" />
        </motion.div>
      ))}
    </motion.div>
  );
}
