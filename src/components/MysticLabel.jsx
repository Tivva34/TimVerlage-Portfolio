import { useState, useEffect, useRef, useCallback } from "react";
import "../styles/MysticLabel.css";

/**
 * MysticLabel - Self-translating alchemical inscription badge
 *
 * Displays a Latin-inspired mystical inscription by default and reveals its
 * plain-English translation upon hover, keyboard focus, or touch activation.
 *
 * Implements a zero-layout-shift CSS Grid overlay, full keyboard accessibility,
 * touch toggle with outside-click dismissal, screen-reader clarity via aria-label,
 * and prefers-reduced-motion compliance.
 *
 * @param {string} defaultText - Mystical Latin label (idle state)
 * @param {string} revealText - Plain-English translation (interactive reveal state)
 * @param {React.ReactNode} [glyph] - Optional alchemical sigil glyph (e.g. 🜃, 🜔)
 * @param {string} [className=""] - Additional class names for badge container
 * @param {string} [glyphClassName=""] - Additional class names for glyph container
 * @param {string} [tagClassName=""] - Additional class names for text tag container
 * @param {boolean} [cardHovered=false] - Optional parent card hover trigger
 */
export default function MysticLabel({
  defaultText,
  revealText,
  glyph,
  className = "",
  glyphClassName = "",
  tagClassName = "",
  cardHovered = false,
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const badgeRef = useRef(null);

  // Close touch-revealed state when clicking outside
  useEffect(() => {
    if (!isRevealed) return;

    const handleOutsideClick = (event) => {
      if (badgeRef.current && !badgeRef.current.contains(event.target)) {
        setIsRevealed(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, [isRevealed]);

  // Touch & click toggle
  const handleClick = useCallback((e) => {
    // Only toggle if clicked directly (prevent bubbling issues)
    e.stopPropagation();
    setIsRevealed((prev) => !prev);
  }, []);

  // Keyboard activation (Enter / Space to toggle, Escape to dismiss)
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      setIsRevealed((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsRevealed(false);
    }
  }, []);

  const active = isRevealed || cardHovered;

  return (
    <span
      ref={badgeRef}
      className={`mystic-badge ${className} ${active ? "is-revealed" : ""}`}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onBlur={() => setIsRevealed(false)}
      aria-label={revealText}
    >
      {glyph && (
        <span className={`mystic-glyph ${glyphClassName}`} aria-hidden="true">
          {glyph}
        </span>
      )}

      <span className={`mystic-tag-container ${tagClassName}`} aria-hidden="true">
        <span className="mystic-text mystic-text-default">
          {defaultText}
        </span>
        <span className="mystic-text mystic-text-reveal">
          {revealText}
        </span>
      </span>
    </span>
  );
}
