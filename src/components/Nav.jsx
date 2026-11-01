import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_PATH, navigateTo } from "../App.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import "../styles/Nav.css";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll spy to highlight active section and track header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const scrollY = window.scrollY + 200;
      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setMobileOpen(false);

    const isHomePage =
      window.location.pathname === BASE_PATH ||
      window.location.pathname === BASE_PATH + "/";

    if (!isHomePage) {
      navigateTo("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      window.history.pushState(null, "", BASE_PATH + "/");
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Brand / Logo */}
        <a
          href={`${BASE_PATH}/`}
          onClick={(e) => handleNavClick(e, "home")}
          className="header-brand"
          aria-label="Tim Verlage - Homepage"
        >
          <img
            src={`${import.meta.env.BASE_URL}Images/Logo/V3.webp`}
            alt="Tim Verlage Logo"
            className="brand-logo-img"
            width="38"
            height="38"
            loading="eager"
            decoding="async"
          />
          <span className="brand-name">Tim Verlage</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="desktop-nav-list">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`${BASE_PATH}/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`nav-link ${active === link.id ? "active" : ""}`}
                  aria-current={active === link.id ? "page" : undefined}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="nav-active-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls: Theme Toggle, CTA, and Mobile Toggle */}
        <div className="header-controls">
          {/* Polished Theme Toggle Button with SVG Icons */}
          <button
            type="button"
            className="header-theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <div className="theme-icon-wrap" aria-hidden="true">
              {isDark ? (
                /* Glowing Sun for switching to light mode */
                <svg
                  className="theme-icon sun-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                /* Crisp Crescent Moon for switching to dark mode */
                <svg
                  className="theme-icon moon-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </div>
          </button>

          {/* Quick Contact CTA Button on desktop */}
          <a
            href={`${BASE_PATH}/#contact`}
            onClick={(e) => handleNavClick(e, "contact")}
            className="header-cta-btn"
          >
            <span>Get in touch</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            className="mobile-nav-drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobile-nav-content" aria-label="Mobile navigation">
              <ul className="mobile-nav-list">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`${BASE_PATH}/#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`mobile-nav-link ${active === link.id ? "active" : ""}`}
                      aria-current={active === link.id ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      {active === link.id && <span className="mobile-active-dot" />}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-nav-footer">
                <a
                  href={`${BASE_PATH}/#contact`}
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="mobile-cta-btn"
                >
                  <span>Start a conversation</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}