import { navigateTo, BASE_PATH } from "../App.jsx";
import React, { useEffect, useState } from "react";
import { featuredProjects } from "../data/projects.js";
import { getTechKey, techLogos, darkLogos } from "../data/languageLogos.js";
import "../styles/Projects.css";
import "./ProjectDetail.css";

export default function ProjectDetail(props) {
  const slug = props.slug;

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
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, currentImages.length]);

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
      if (e?.currentTarget && window.innerWidth <= 768) {
        e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    };

    const handleSubCategoryClick = (subCategory, e) => {
      setActiveSubCategory(subCategory);
      if (e?.currentTarget && window.innerWidth <= 768) {
        e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    };

    return (
      <div className="gallery-with-tabs">
        <nav className="gallery-tabs-nav" aria-label="Gallery categories">
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
              const isMobileCat = category.toLowerCase().includes("mobil");
              const isAdminCat = category.toLowerCase().includes("admin");
              const isFirstAdminCat = isAdminCat && (idx === 0 || !categories[idx - 1].toLowerCase().includes("admin"));

              return (
                <React.Fragment key={category}>
                  {isFirstAdminCat && (
                    <li className="gallery-tabs-row-break" aria-hidden="true" role="presentation" />
                  )}
                  <li role="presentation" className="gallery-tabs-item">
                    <button
                      role="tab"
                      id={`tab-${category}`}
                      aria-controls={`panel-${category}`}
                      className={`gallery-tab-btn ${isSelected ? "active" : ""}`}
                      onClick={(e) => handleCategoryClick(category, e)}
                      aria-selected={isSelected}
                    >
                      <span className="gallery-tab-indicator-icon" aria-hidden="true">
                        {isMobileCat ? "📱" : "💻"}
                      </span>
                      <span className="gallery-tab-label">{category.replace(/-/g, " ")}</span>
                      {count > 0 && <span className="gallery-tab-count" aria-label={`${count} images`}>{count}</span>}
                    </button>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </nav>

        {hasSubCategories && subCategories.length > 0 && (
          <nav className="gallery-tabs-nav gallery-subtabs-nav" aria-label="Gallery subcategories">
            <ul className="gallery-tabs-list gallery-subtabs-list" role="tablist">
              {subCategories.map((subCategory) => {
                const subImages = activeCategoryData[subCategory] || [];
                const count = Array.isArray(subImages) ? subImages.length : 0;
                const isSelected = activeSubCategory === subCategory;

                return (
                  <li key={subCategory} role="presentation" className="gallery-tabs-item">
                    <button
                      role="tab"
                      id={`subtab-${subCategory}`}
                      aria-controls={`subpanel-${subCategory}`}
                      className={`gallery-tab-btn gallery-subtab-btn ${isSelected ? "active" : ""}`}
                      onClick={(e) => handleSubCategoryClick(subCategory, e)}
                      aria-selected={isSelected}
                    >
                      <span className="gallery-tab-label">{subCategory.replace(/-/g, " ")}</span>
                      {count > 0 && <span className="gallery-tab-count gallery-subtab-count">{count}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
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
          {project.type && <span className="project-meta-type">{project.type}</span>}
          <h2 id="project-title">{project.name}</h2>
          <p className="project-summary">
            {hasDetails && project.detailedContent.summary ? project.detailedContent.summary : project.description}
          </p>
        </header>
      </div>

      <div className="project-detail-container">
        <div className="project-detail-content project-card aurora-glow">

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

          <div className="project-links">
            {project.html_url && (
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn-primary project-btn">
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline project-btn">
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="project-gallery-section">
          <h2>Gallery</h2>
          {renderGallery()}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            &times;
          </button>
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {currentImages.length}
          </div>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous image">
            &#10094;
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={`${import.meta.env.BASE_URL}${currentImages[lightboxIndex]}`}
              alt={`Lightbox view ${lightboxIndex + 1}`}
              className={`lightbox-img ${activeCategory?.toLowerCase().includes("mobil") ? "mobile-lightbox-img" : ""}`}
            />
          </div>

          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next image">
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
