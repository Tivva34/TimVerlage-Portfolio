import { navigateTo, BASE_PATH } from "../App.jsx";
import React, { useEffect, useState, useRef } from "react";
import { featuredProjects } from "../data/projects.js";
import { getTechKey, techLogos, darkLogos } from "../data/languageLogos.js";
import { useTheme } from "../context/ThemeContext";
import "../styles/Projects.css";
import "./ProjectDetail.css";

export default function ProjectDetail(props) {
  const slug = props.slug;
  const { isDark } = useTheme();

  // Find project
  const project = featuredProjects.find(p => p.slug === slug);

  const [activeCategory, setActiveCategory] = useState(() => {
    if (project && project.gallery && !Array.isArray(project.gallery)) {
      return Object.keys(project.gallery)[0];
    }
    return null;
  });

  const [activeSubCategory, setActiveSubCategory] = useState(() => {
    if (project && project.gallery && !Array.isArray(project.gallery)) {
      const firstCat = Object.keys(project.gallery)[0];
      const val = project.gallery[firstCat];
      if (val && typeof val === "object" && !Array.isArray(val)) {
        return Object.keys(val)[0];
      }
    }
    return null;
  });

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const thumbnailStripRef = useRef(null);

  const getCategoryImages = () => {
    if (!project || !project.gallery) return [];
    if (Array.isArray(project.gallery)) return project.gallery;
    const catData = project.gallery[activeCategory];
    if (!catData) return [];
    if (Array.isArray(catData)) return catData;
    if (typeof catData === "object") {
      return catData[activeSubCategory] || Object.values(catData)[0] || [];
    }
    return [];
  };

  const currentImages = getCategoryImages();

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  const prevImage = () => setLightboxIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Home") setLightboxIndex(0);
      if (e.key === "End") setLightboxIndex(currentImages.length - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, currentImages.length]);

  useEffect(() => {
    if (lightboxIndex !== null && thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.children[lightboxIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [lightboxIndex]);

  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchStart - touchEnd;
    if (delta > 50) nextImage();
    if (delta < -50) prevImage();
    setTouchStart(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (project && project.gallery && !Array.isArray(project.gallery)) {
      const firstCat = Object.keys(project.gallery)[0];
      setActiveCategory(firstCat);
      const val = project.gallery[firstCat];
      if (val && typeof val === "object" && !Array.isArray(val)) {
        setActiveSubCategory(Object.keys(val)[0]);
      } else {
        setActiveSubCategory(null);
      }
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/" />;
  }

  const projectTech = [...(project.languages || []), ...(project.tech || [])];


  const generateCaption = (url) => {
    let name = url.split('/').pop();
    name = name.replace(/\.[^/.]+$/, '');

    const match = name.match(/^(\d+)\.(.+)$/);
    if (!match) {
      return { order: Infinity, page: '', content: name, type: '', raw: name };
    }

    const order = parseInt(match[1], 10);
    const rest = match[2].trim();
    const parts = rest.split('-').map(p => p.trim());

    if (parts.length >= 3) {
      return {
        order,
        page: parts[0],
        content: parts[1],
        type: parts.slice(2).join(' - '),
        raw: rest
      };
    } else if (parts.length === 2) {
      return {
        order,
        page: parts[0],
        content: parts[1],
        type: '',
        raw: rest
      };
    } else {
      return {
        order,
        page: '',
        content: parts[0],
        type: '',
        raw: rest
      };
    }
  };

  const renderGallery = () => {
    if (!project.gallery) return null;

    if (Array.isArray(project.gallery)) {
      return (
        <div className="project-gallery-grid">
          {project.gallery.map((img, idx) => {
            const meta = generateCaption(img);
            return (
              <figure key={idx} className="gallery-figure">
                <img
                  src={`${import.meta.env.BASE_URL}${img}`}
                  alt={`${meta.content || 'Project view'} ${idx + 1}`}
                  className="gallery-image"
                  loading="lazy"
                  onClick={() => openLightbox(idx)}
                />
                {(meta.page || meta.content || meta.type) && meta.content !== img.split('/').pop() && (
                  <figcaption className="gallery-caption">
                    {meta.page && (
                      <>
                        <strong>{meta.page}</strong>
                        <br />
                      </>
                    )}
                    {meta.content}
                    {meta.type && ` · ${meta.type}`}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      );
    }

    // Category SVG icons for refined, professional presentation
    const DesktopIcon = () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );

    const MobileIcon = () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    );

    const AdminIcon = () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    );

    const LightModeIcon = () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    );

    const GlobeIcon = () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );

    function getCategoryIcon(category) {
      const lower = (category || "").toLowerCase();
      if (lower.includes("mobil") || lower.includes("phone")) {
        return <MobileIcon />;
      }
      if (lower.includes("english") || lower.includes("engelska") || lower.includes("global")) {
        return <GlobeIcon />;
      }
      if (lower.includes("light") || lower.includes("ljust")) {
        return <LightModeIcon />;
      }
      if (lower.includes("admin") || lower.includes("panel") || lower.includes("dashboard")) {
        return <AdminIcon />;
      }
      return <DesktopIcon />;
    }

    const categories = Object.keys(project.gallery);
    const activeCategoryData = project.gallery[activeCategory];
    const hasSubCategories = activeCategoryData && typeof activeCategoryData === "object" && !Array.isArray(activeCategoryData);
    const subCategories = hasSubCategories ? Object.keys(activeCategoryData) : [];

    const handleCategoryClick = (category, e) => {
      setActiveCategory(category);
      const catData = project.gallery[category];
      if (catData && typeof catData === "object" && !Array.isArray(catData)) {
        setActiveSubCategory(Object.keys(catData)[0]);
      } else {
        setActiveSubCategory(null);
      }
      if (e?.currentTarget) {
        e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    };

    const handleSubCategoryClick = (subCategory, e) => {
      setActiveSubCategory(subCategory);
      if (e?.currentTarget) {
        e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    };

    const handleCategoryKeyDown = (e, index) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const nextIdx = (index + 1) % categories.length;
        handleCategoryClick(categories[nextIdx]);
        document.getElementById(`tab-${categories[nextIdx]}`)?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIdx = (index - 1 + categories.length) % categories.length;
        handleCategoryClick(categories[prevIdx]);
        document.getElementById(`tab-${categories[prevIdx]}`)?.focus();
      }
    };

    const handleSubCategoryKeyDown = (e, index) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const nextIdx = (index + 1) % subCategories.length;
        handleSubCategoryClick(subCategories[nextIdx]);
        document.getElementById(`subtab-${subCategories[nextIdx]}`)?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIdx = (index - 1 + subCategories.length) % subCategories.length;
        handleSubCategoryClick(subCategories[prevIdx]);
        document.getElementById(`subtab-${subCategories[prevIdx]}`)?.focus();
      }
    };

    return (
      <div className="gallery-with-tabs">
        {/* Level 1: Primary Category Navigation */}
        <div className="gallery-category-nav-wrapper">
          <nav
            className={`gallery-tabs-nav ${project.slug === "jannes-maskin-o-smide" ? "jannes-gallery-tabs-nav" : ""}`}
            aria-label="Gallerikategorier"
          >
            <ul className="gallery-tabs-list" role="tablist">
              {categories.map((category, idx) => {
                const catData = project.gallery[category];
                let count = 0;
                if (Array.isArray(catData)) {
                  count = catData.length;
                } else if (catData && typeof catData === "object") {
                  count = Object.values(catData).reduce((acc, sub) => acc + (Array.isArray(sub) ? sub.length : 0), 0);
                }
                const isSelected = activeCategory === category;
                const isJannesAdminBreak = project.slug === "jannes-maskin-o-smide" && category === "Admin Panel";

                return (
                  <React.Fragment key={category}>
                    {isJannesAdminBreak && (
                      <li className="gallery-tabs-row-break" aria-hidden="true" role="presentation" />
                    )}
                    <li role="presentation" className="gallery-tabs-item">
                      <button
                        role="tab"
                        id={`tab-${category}`}
                        aria-controls={`panel-${category}`}
                        className={`gallery-tab-btn ${isSelected ? "active" : ""}`}
                        onClick={(e) => handleCategoryClick(category, e)}
                        onKeyDown={(e) => handleCategoryKeyDown(e, idx)}
                        aria-selected={isSelected}
                        tabIndex={isSelected ? 0 : -1}
                      >
                        <span className="gallery-tab-icon" aria-hidden="true">
                          {getCategoryIcon(category)}
                        </span>
                        <span className="gallery-tab-label">{category.replace(/-/g, " ")}</span>
                        {count > 0 && <span className="gallery-tab-count" aria-label={`${count} bilder`}>{count}</span>}
                      </button>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Level 2: Subcategory / Page Navigation */}
        {hasSubCategories && subCategories.length > 0 && (
          <div className="gallery-subnav-wrapper">
            <nav className="gallery-subtabs-nav" aria-label="Gallerisidor och vyer">
              <span className="gallery-subtabs-label" aria-hidden="true">Pages </span>
              <ul className="gallery-subtabs-list" role="tablist">
                {subCategories.map((subCategory, idx) => {
                  const subImages = activeCategoryData[subCategory] || [];
                  const count = Array.isArray(subImages) ? subImages.length : 0;
                  const isSelected = activeSubCategory === subCategory;

                  return (
                    <li key={subCategory} role="presentation" className="gallery-subtabs-item">
                      <button
                        role="tab"
                        id={`subtab-${subCategory}`}
                        aria-controls={`subpanel-${subCategory}`}
                        className={`gallery-subtab-btn ${isSelected ? "active" : ""}`}
                        onClick={(e) => handleSubCategoryClick(subCategory, e)}
                        onKeyDown={(e) => handleSubCategoryKeyDown(e, idx)}
                        aria-selected={isSelected}
                        tabIndex={isSelected ? 0 : -1}
                      >
                        <span className="gallery-subtab-label">{subCategory.replace(/-/g, " ")}</span>
                        {count > 0 && <span className="gallery-subtab-count">{count}</span>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}

        {(() => {
          const isMobileView = activeCategory?.toLowerCase().includes("mobil");
          return (
            <div className={`project-gallery-grid ${isMobileView ? "mobile-gallery-grid" : ""}`}>
              {currentImages.map((img, idx) => {
                const meta = generateCaption(img);
                return (
                  <figure key={idx} className="gallery-figure">
                    <img
                      src={`${import.meta.env.BASE_URL}${img}`}
                      alt={`${meta.content || 'Project view'} ${idx + 1}`}
                      className={`gallery-image ${isMobileView ? "mobile-gallery-image" : ""}`}
                      loading="lazy"
                      onClick={() => openLightbox(idx)}
                    />
                    <figcaption className="gallery-caption">
                      {meta.page && (
                        <>
                          <strong>{meta.page}</strong>
                          <br />
                        </>
                      )}
                      {meta.content}
                      {meta.type && ` · ${meta.type}`}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          );
        })()}
      </div>
    );
  };

  const hasDetails = !!project.detailedContent;

  let sectionCounter = 0;
  const overviewTag = hasDetails && project.detailedContent.intro
    ? `${String(++sectionCounter).padStart(2, '0')} — OVERVIEW`
    : null;
  const techTag = `${String(++sectionCounter).padStart(2, '0')} — TECH & TOOLS`;
  const featuresTag = hasDetails && project.detailedContent.features
    ? `${String(++sectionCounter).padStart(2, '0')} — FEATURES & RESULTS`
    : null;
  const baseSectionOffset = sectionCounter;

  return (
    <section id="project-detail" className="projects-panel is-active" aria-labelledby="project-title">
      <div className="project-detail-header-container">
        <a href={BASE_PATH + '/'} onClick={(e) => { e.preventDefault(); navigateTo('/'); }} className="btn-outline project-btn back-btn">
          &larr; Back to Portfolio
        </a>

        <header className="project-detail-header">
          {project.type && (
            <div className="project-detail-sigil-badge">
              <span className="project-detail-sigil-glyph" aria-hidden="true">🝛</span>
              <span className="project-meta-type">{project.type}</span>
            </div>
          )}
          <h2 id="project-title">{project.name}</h2>
          <p className="project-summary">
            {hasDetails && project.detailedContent.summary ? project.detailedContent.summary : project.description}
          </p>
        </header>
      </div>

      <div className="project-detail-container">
        <div className="project-detail-content project-card">
          {/* Antique Geometric Corner Frame */}
          <div className="project-card-frame" aria-hidden="true">
            <span className="project-corner corner-tl" />
            <span className="project-corner corner-tr" />
            <span className="project-corner corner-bl" />
            <span className="project-corner corner-br" />
          </div>

          {overviewTag && (
            <div className="project-detail-section">
              <span className="project-meta-tag">{overviewTag}</span>
              <h3>{project.detailedContent.introTitle || "A solution with a clear purpose."}</h3>
              <p className="project-description">{project.detailedContent.intro}</p>
            </div>
          )}

          <div className="project-detail-section">
            <span className="project-meta-tag">{techTag}</span>
            <h3>Technologies</h3>
            <ul className="project-tech-list" aria-label={`${project.name} technologies`}>
              {projectTech.map((tech) => {
                const key = getTechKey(tech);
                return (
                  <li className="project-tech-item" key={tech}>
                    <img src={techLogos[key] || techLogos.API} alt={`${tech} logo`} title={tech} className={`project-tech-logo ${darkLogos.includes(key) ? "logo-white-filter" : ""}`} />
                  </li>
                );
              })}
            </ul>
          </div>

          {featuresTag && (
            <div className="project-detail-section">
              <span className="project-meta-tag">{featuresTag}</span>
              <h3>Features</h3>
              <ul className="project-feature-list">
                {project.detailedContent.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {hasDetails && project.detailedContent.sections && (
            project.detailedContent.sections.map((section, idx) => {
              const currentNum = String(baseSectionOffset + idx + 1).padStart(2, '0');
              const isNumbered = /^\d+\s*[-—–]/.test(section.tag || '');
              const displayTag = isNumbered
                ? section.tag
                : (section.tag ? section.tag : `${currentNum} — ${section.title}`);

              return (
                <div key={idx} className="project-detail-section">
                  <span className="project-meta-tag">{displayTag}</span>
                  <h3>{section.title}</h3>
                  <p className="project-description">{section.text}</p>
                  {section.bullets && (
                    <ul className="project-feature-list">
                      {section.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                </div>
              );
            })
          )}

          {project.liveUrl && (
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline project-btn">
                Live Demo
              </a>
            </div>
          )}
        </div>

        <div className="project-gallery-section">
          <h2>Gallery</h2>
          {renderGallery()}
        </div>
      </div>

      {lightboxIndex !== null && currentImages.length > 0 && (
        <div
          className={`lightbox-overlay ${isDark ? "theme-dark" : "theme-light"}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Bildgalleri"
        >
          {/* Top Control Bar */}
          <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-counter-badge" aria-label={`Bild ${lightboxIndex + 1} av ${currentImages.length}`}>
              <span className="current-num">{String(lightboxIndex + 1).padStart(2, '0')}</span>
              <span className="counter-sep">/</span>
              <span className="total-num">{String(currentImages.length).padStart(2, '0')}</span>
            </div>

            {(() => {
              const currentMeta = generateCaption(currentImages[lightboxIndex]);
              const captionText = currentMeta.page ? `${currentMeta.page} · ${currentMeta.content}` : currentMeta.content;
              if (captionText && captionText !== currentImages[lightboxIndex].split('/').pop()) {
                return (
                  <div className="lightbox-header-caption" title={captionText}>
                    {captionText}
                  </div>
                );
              }
              return null;
            })()}

            <button
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Stäng galleri (Esc)"
              type="button"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Desktop/Tablet Floating Navigation Buttons */}
          <button
            className="lightbox-nav-btn lightbox-nav-prev"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Föregående bild (Vänsterpil)"
            type="button"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Main Image Stage */}
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={`${import.meta.env.BASE_URL}${currentImages[lightboxIndex]}`}
              alt={`Bildvisning ${lightboxIndex + 1} av ${currentImages.length}`}
              className={`lightbox-img ${activeCategory?.toLowerCase().includes("mobil") ? "mobile-lightbox-img" : ""}`}
            />
          </div>

          <button
            className="lightbox-nav-btn lightbox-nav-next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Nästa bild (Högerpil)"
            type="button"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Bottom Dock with Mobile Navigation Controls & Thumbnail Strip */}
          <div className="lightbox-bottom-dock" onClick={(e) => e.stopPropagation()}>
            {/* Mobile inline arrows & counter for effortless one-handed thumb navigation */}
            <div className="lightbox-mobile-controls" aria-label="Mobil gallerinavigering">
              <button
                className="lightbox-dock-btn"
                onClick={prevImage}
                aria-label="Föregående bild"
                type="button"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="lightbox-dock-counter">
                <span>{String(lightboxIndex + 1).padStart(2, '0')}</span>
                <span className="sep">/</span>
                <span>{String(currentImages.length).padStart(2, '0')}</span>
              </div>
              <button
                className="lightbox-dock-btn"
                onClick={nextImage}
                aria-label="Nästa bild"
                type="button"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Thumbnail Strip */}
            {currentImages.length > 1 && (
              <div
                className="lightbox-thumbnails-strip"
                ref={thumbnailStripRef}
                role="tablist"
                aria-label="Miniatyrbilder"
              >
                {currentImages.map((thumbUrl, idx) => {
                  const isActive = idx === lightboxIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Visa bild ${idx + 1}`}
                      className={`lightbox-thumb-btn ${isActive ? "active" : ""}`}
                      onClick={() => setLightboxIndex(idx)}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${thumbUrl}`}
                        alt=""
                        className="lightbox-thumb-img"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
