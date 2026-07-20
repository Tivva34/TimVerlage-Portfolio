import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
import { getTechKey, techLogos } from "../data/languageLogos.js";
import { useGithubRepos } from "../hooks/useGithubRepos.js";
import "../styles/Projects.css";

const truncate = (str, n) =>
  str?.length > n ? `${str.slice(0, n - 1)}...` : str;

const hasLiveDemo = (project) =>
  Boolean(project.liveUrl || repoDemos[project.name] || project.homepage);

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
      activeCategory === "live"
        ? hasLiveDemo(project)
        : (project.category || projectCategoryByName[project.name] || "frontend") ===
          activeCategory
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
          {visibleProjects.map((repo, index) => {
          const projectTech = getProjectTech(repo);

          return (
            <motion.article
              key={repo.id}
              className="project-card"
              {...cardMotion(index * 0.05)}
            >
              <figure className="project-image-viewport">
                <img
                  src={
                    repo.screenshot ||
                    repoScreenshots[repo.name] ||
                    defaultImage
                  }
                  alt={`${repo.name} preview`}
                  className="project-image"
                />
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
                          {techLogos[key] ? (
                            <img
                              src={techLogos[key]}
                              alt={`${tech} logo`}
                              title={tech}
                              className="project-tech-logo"
                            />
                          ) : (
                            <span>{tech}</span>
                          )}
                        </li>
                      );
                    })
                  ) : (
                    <li className="project-tech-item">N/A</li>
                  )}
                </ul>

                <footer className="project-links">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary project-btn"
                  >
                    View on GitHub
                  </a>

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
          })}
        </div>
      </div>
    </section>
  );
}
