import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { defaultImage, featuredProjects, repoDemos, repoLanguageOverrides, repoScreenshots, } from "../data/projects.js";
import { getLanguageKey, languageLogos } from "../data/languageLogos.js";
import { useGithubRepos } from "../hooks/useGithubRepos.js";
import "../styles/Projects.css";

const truncate = (str, n) =>
  str?.length > n ? `${str.slice(0, n - 1)}...` : str;

export default function Projects() {
  const { repos, repoLanguages } = useGithubRepos("Tivva34");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const shouldReduceMotion = useReducedMotion();

  const headingMotion = shouldReduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        viewport: { amount: 0.35, once: true },
      };

  const cardMotion = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.3 },
          viewport: { amount: 0.25, once: false },
        };

  const portfolioProjects =
  repos.length > 0
    ? [featuredProjects[0], featuredProjects[1], ...repos, featuredProjects[2]]
    : featuredProjects;

  const toggleDescription = (projectId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const getProjectLanguages = (repo) =>
    repo.languages ||
    repoLanguageOverrides[repo.name] ||
    repoLanguages[repo.name];

  return (
    <section id="projects" aria-labelledby="projects-title">
      <motion.h2 id="projects-title" {...headingMotion}>
        Featured Projects
      </motion.h2>

      <section className="projects-grid" aria-label="Project list">
        {portfolioProjects.map((repo, index) => {
          const projectLanguages = getProjectLanguages(repo);

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
                  {projectLanguages ? (
                    projectLanguages.map((lang) => {
                      const key = getLanguageKey(lang);

                      return (
                        <li className="project-tech-item" key={lang}>
                          {languageLogos[key] ? (
                            <img
                              src={languageLogos[key]}
                              alt={`${lang} logo`}
                              title={lang}
                              className="project-tech-logo"
                            />
                          ) : (
                            <span>{lang}</span>
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
      </section>
    </section>
  );
}