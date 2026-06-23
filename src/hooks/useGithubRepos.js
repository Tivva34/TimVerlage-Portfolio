import { useEffect, useState } from "react";
import { selectedRepos } from "../data/projects.js";

export function useGithubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [repoLanguages, setRepoLanguages] = useState({});

  useEffect(() => {
    const fetchRepos = () => {
      const token = import.meta.env.DEV
        ? import.meta.env.VITE_GITHUB_TOKEN
        : undefined;

      const headers = token ? { Authorization: `token ${token}` } : {};

      fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
        headers,
      })
        .then((res) => res.json())
        .then((data) => {
          if (!Array.isArray(data)) {
            console.warn("GitHub API returned non-array data");
            return;
          }

          const finalRepos = data
            .filter((repo) => !repo.fork)
            .filter((repo) => selectedRepos.includes(repo.name));

          setRepos(finalRepos);

          finalRepos.forEach((repo) => {
            fetch(repo.languages_url, { headers })
              .then((res) => res.json())
              .then((langs) => {
                if (langs && typeof langs === "object" && !langs.message) {
                  setRepoLanguages((prev) => ({
                    ...prev,
                    [repo.name]: Object.keys(langs),
                  }));
                }
              });
          });
        })
        .catch((error) => {
          console.warn("GitHub API fetch error:", error?.message);
        });
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(fetchRepos, { timeout: 2000 });
    } else {
      setTimeout(fetchRepos, 100);
    }
  }, [username]);

  return { repos, repoLanguages };
}