export const defaultImage = `${import.meta.env.BASE_URL}projects/default-project.png`;

export const repoScreenshots = {
  "Bonz.ai": `${import.meta.env.BASE_URL}projects/Bonz.ai.png`,
  Shui: `${import.meta.env.BASE_URL}projects/Shui.png`,
  IMDO: `${import.meta.env.BASE_URL}projects/IMDO.png`,
  "Nasa-SpaceViewer": `${import.meta.env.BASE_URL}projects/Nasa2.png`,
  ReadingSloth: `${import.meta.env.BASE_URL}projects/ReadingSloth.png`,
  FadingLightDemo: `${import.meta.env.BASE_URL}projects/FadingLight4.png`,
};

export const repoDemos = {
  IMDO: "https://tivva34.github.io/IMDO/index.html",
};

export const selectedRepos = [
  "Bonz.ai",
  "IMDO",
  "Nasa-SpaceViewer",
  "ReadingSloth",
  "Shui",
  "FadingLightDemo",
];

export const repoLanguageOverrides = {
  FadingLightDemo: ["CSharp", "Unity"],
};

export const featuredProjects = [
  {
    id: "macservice",
    name: "MAC Service",
    description:
      "MAC Service Website – A modern business website for a local service company. Built with React, Vite, and Framer Motion, featuring responsive design, SEO optimization, accessibility improvements, contact form integration, and custom domain deployment.",
    html_url: "https://github.com/Hallonpaj1/MACService",
    liveUrl: "https://mackoping.se",
    languages: ["JavaScript", "HTML", "CSS"],
    screenshot: `${import.meta.env.BASE_URL}projects/MacService.png`,
  },
  {
    id: "iron-turtles",
    name: "The Turtlebase",
    description:
      "Movie discovery and watchlist app built with React, Vite, and Swiper for browsing, searching, and saving films.",
    html_url: "https://github.com/Tivva34/Iron-Turtles",
    languages: ["JavaScript", "HTML", "CSS"],
    screenshot: `${import.meta.env.BASE_URL}projects/iron-turtles.png`,
  },
];