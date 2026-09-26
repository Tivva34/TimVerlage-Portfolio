import { useEffect } from 'react';

export function useAurora() {
  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentTarget = null;
    let animationFrameId = null;
    let isTracking = false;

    // Linear interpolation function for smooth trailing
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      if (currentTarget) {
        // factor 0.08 gives a nice, slightly delayed floaty feel.
        currentX = lerp(currentX, targetX, 0.08);
        currentY = lerp(currentY, targetY, 0.08);
        
        currentTarget.style.setProperty('--mouse-x', `${currentX}px`);
        currentTarget.style.setProperty('--mouse-y', `${currentY}px`);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const target = e.target.closest('.aurora-glow');
      
      if (target) {
        const rect = target.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
        
        // If entering a new card, snap the current position immediately 
        // to avoid the glow flying in from random old coordinates
        if (currentTarget !== target) {
          currentTarget = target;
          currentX = targetX;
          currentY = targetY;
          currentTarget.style.setProperty('--mouse-x', `${currentX}px`);
          currentTarget.style.setProperty('--mouse-y', `${currentY}px`);
        }
        
        if (!isTracking) {
          isTracking = true;
          animate();
        }
      } else {
        currentTarget = null;
        if (isTracking) {
          cancelAnimationFrame(animationFrameId);
          isTracking = false;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);
}
