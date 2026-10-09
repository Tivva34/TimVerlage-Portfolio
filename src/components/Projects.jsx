import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { navigateTo, BASE_PATH } from "../App.jsx";
import {
  defaultImage,
  featuredProjects,
  getSortedProjects,
  projectCategoryByName,
  projectTabs,
  repoDemos,
  repoLanguageOverrides,
  repoScreenshots,
  repoTechOverrides,
} from "../data/projects.js";
import { getTechKey, techLogos, darkLogos } from "../data/languageLogos.js";
import { useGithubRepos } from "../hooks/useGithubRepos.js";
import "../styles/Projects.css";

const truncate = (str, n) =>
  str?.length > n ? `${str.slice(0, n - 1)}...` : str;

const hasLiveDemo = (project) =>
  Boolean(project.liveUrl || repoDemos[project.name] || project.homepage);

const ProjectCard = ({ repo, index, cardMotion, expandedDescriptions, toggleDescription, getProjectTech }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const defaultScreenshot = repo.screenshot || repoScreenshots[repo.name] || defaultImage;

  let galleryImages = [];
  if (repo.gallery) {
    if (Array.isArray(repo.gallery)) {
      galleryImages = repo.gallery;
    } else {
      galleryImages = Object.values(repo.gallery).flat();
    }
  }

  const formattedGallery = galleryImages.map(img => {
    if (img.startsWith(import.meta.env.BASE_URL)) return img;
    return `${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`;
  });

  // Always ensure the first image is exactly the defaultScreenshot so it matches what works,
  // and append the rest of the gallery.
  const images = formattedGallery.length > 1
    ? [defaultScreenshot, ...formattedGallery.filter(img => img !== defaultScreenshot && img !== defaultScreenshot.replace(import.meta.env.BASE_URL, ''))].slice(0, 6)
    : [defaultScreenshot];

  useEffect(() => {
    let interval;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImgIndex(prev => (prev + 1) % images.length);
      }, 1500);
    } else {
      setCurrentImgIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const projectTech = getProjectTech(repo);

  return (
    <motion.article
      className="project-card aurora-glow"
      {...cardMotion(index * 0.05)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="project-image-viewport">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${repo.name} preview ${idx + 1}`}
            className="project-image"
            style={{
              position: idx === 0 ? "relative" : "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: idx === currentImgIndex ? 1 : 0,
              transition: "opacity 0.6s ease-in-out, transform 0.45s ease",
              zIndex: idx === currentImgIndex ? 1 : 0
            }}
          />
        ))}
      </figure>

      <h3>{repo.name}</h3>

      <p
        className="project-description"
        id={`project-description-${repo.id}`}
      >
        {expandedDescriptions[repo.id]
          ? repo.description || "No description provided."
          : truncate(
            repo.description || "No description provided.",
            140
          )}
      </p>

      <button
        type="button"
        className="project-description-toggle"
        onClick={() => toggleDescription(repo.id)}
        aria-expanded={Boolean(expandedDescriptions[repo.id])}
        aria-controls={`project-description-${repo.id}`}
      >
        {expandedDescriptions[repo.id] ? "Show less" : "Show more"}
      </button>

      <div className="project-footer">
        <ul
          className="project-tech-list"
          aria-label={`${repo.name} technologies`}
        >
          {projectTech.length > 0 ? (
            projectTech.map((tech) => {
              const key = getTechKey(tech);

              return (
                <li className="project-tech-item" key={tech}>
                  <img src={techLogos[key] || techLogos.API} alt={`${tech} logo`} title={tech} className={`project-tech-logo ${darkLogos.includes(key) ? "logo-white-filter" : ""}`} />
                </li>
              );
            })
          ) : (
            <li className="project-tech-item">N/A</li>
          )}
        </ul>

        <footer className="project-links">
          {repo.slug && (
            <a href={`${BASE_PATH}/projects/${repo.slug}`} onClick={(e) => { e.preventDefault(); navigateTo(`/projects/${repo.slug}`); }} className="btn-primary project-btn">
              View Details
            </a>
          )}

          {(repo.liveUrl || repoDemos[repo.name] || repo.homepage) && (
            <a
              href={
                repo.liveUrl || repoDemos[repo.name] || repo.homepage
              }
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline project-btn"
            >
              Live Demo
            </a>
          )}
        </footer>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  const { repos, repoLanguages } = useGithubRepos("Tivva34");
  const [activeCategory, setActiveCategory] = useState("live");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const shouldReduceMotion = useReducedMotion();

  const headingMotion = shouldReduceMotion
    ? { initial: false }
    : {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.35 },
      viewport: { amount: 0, once: false },
    };

  const cardMotion = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay, duration: 0.3 },
        viewport: { amount: 0, once: false },
      };

  const portfolioProjects = getSortedProjects([
    ...featuredProjects,
    ...repos.map((repo) => ({
      ...repo,
      category: projectCategoryByName[repo.name] || "frontend",
    })),
  ]);

  const visibleProjects = portfolioProjects.filter(
    (project) =>
      !project.hidden && (
        activeCategory === "live"
          ? hasLiveDemo(project)
          : (project.category || projectCategoryByName[project.name] || "frontend") ===
          activeCategory)
  );

  const toggleDescription = (projectId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const getProjectTech = (repo) => {
    const languages =
      repo.languages ||
      repoLanguageOverrides[repo.name] ||
      repoLanguages[repo.name] ||
      [];

    const tech = repo.tech || repoTechOverrides[repo.name] || [];

    return [...languages, ...tech];
  };

  return (
    <section id="projects" aria-labelledby="projects-title">
      <motion.h2 id="projects-title" {...headingMotion}>
        Projects
      </motion.h2>

      <div className="projects-tabs" role="tablist" aria-label="Project categories">
        {projectTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            id={`projects-tab-${tab.key}`}
            aria-selected={activeCategory === tab.key}
            aria-controls={`projects-panel-${tab.key}`}
            className={`project-tab ${activeCategory === tab.key ? "is-active" : ""}`}
            onClick={() => setActiveCategory(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="projects-panel"
        role="tabpanel"
        id={`projects-panel-${activeCategory}`}
        aria-labelledby={`projects-tab-${activeCategory}`}
      >
        <div className="projects-grid" aria-label="Project list">
          {visibleProjects.map((repo, index) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
              index={index}
              cardMotion={cardMotion}
              expandedDescriptions={expandedDescriptions}
              toggleDescription={toggleDescription}
              getProjectTech={getProjectTech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
