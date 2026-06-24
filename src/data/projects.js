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
  id: "supermon",
  name: "SuperMon",
  description:
    "A Pokémon-inspired platformer built in Unity and C# as part of a collaborative exam project. Inspired by our teacher's love of Pokémon, we made him the main character in a classic Super Mario-style adventure. Explore three handcrafted levels, collect coins and Poké Balls, catch Pokémon, battle unique enemies with different attack mechanics, uncover hidden easter eggs, and track your score. The game features custom gameplay systems, animations, artwork, music, and a level selection menu, all created from scratch by our team. My contributions included developing core gameplay mechanics, enemy behaviors, player interactions, UI systems, custom animations, visual effects, and helping shape the overall game experience, while the artwork was created by our artist.",
  html_url: "https://github.com/Zypherkill/Exam",
  liveUrl: "https://zypherkill.github.io/supermon/",
  languages: ["CSharp","Unity", "HTML", "CSS"],
  screenshot: `${import.meta.env.BASE_URL}projects/SuperMon.png`,
  },
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