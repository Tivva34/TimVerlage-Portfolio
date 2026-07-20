export const defaultImage = `${import.meta.env.BASE_URL}projects/default-project.png`;

export const repoScreenshots = {
  Shui: `${import.meta.env.BASE_URL}projects/Shui.png`,
  IMDO: `${import.meta.env.BASE_URL}projects/IMDO.png`,
  "Nasa-SpaceViewer": `${import.meta.env.BASE_URL}projects/Nasa2.png`,
  ReadingSloth: `${import.meta.env.BASE_URL}projects/ReadingSloth.png`,
  FadingLightDemo: `${import.meta.env.BASE_URL}projects/FadingLight4.png`,
};

export const repoDemos = {
  IMDO: "https://tivva34.github.io/IMDO/index.html",
};

export const projectTabs = [
  { key: "live", label: "Live Demos" },
  { key: "frontend", label: "Frontend Projects" },
  { key: "fullstack", label: "Fullstack Projects" },
  { key: "games", label: "Game Projects" },
];

export const projectCategoryByName = {
  SuperMon: "games",
  "MAC Service": "frontend",
  IMDO: "frontend",
  Shui: "fullstack",
  "Nasa-SpaceViewer": "frontend",
  ReadingSloth: "frontend",
  "The Turtlebase": "frontend",
  FadingLightDemo: "games",
};

export const selectedRepos = [
  "IMDO",
  "Nasa-SpaceViewer",
  "ReadingSloth",
  "Shui",
  "FadingLightDemo",
];

export const repoLanguageOverrides = {
  FadingLightDemo: ["CSharp"],
};
export const repoTechOverrides = {
  IMDO: ["API"],
  Shui: ["React", "AWS", "DynamoDB"],
  ReadingSloth: ["React", "React Router"],
  FadingLightDemo: ["Unity"],
  
  "Nasa-SpaceViewer": ["React", "NASA API", "Framer Motion"],
};
export const projectOrder = [
  "SuperMon",
  "Shui",
  "The Turtlebase",
  "IMDO",
  "MAC Service",
  "ReadingSloth",
  "Nasa-SpaceViewer",
  "FadingLightDemo",
];

export const getSortedProjects = (projects) =>
  [...projects].sort((a, b) => {
    const indexA = projectOrder.indexOf(a.name);
    const indexB = projectOrder.indexOf(b.name);

    return indexA - indexB;
  });

export const featuredProjects = [
  {
    id: "supermon",
    name: "SuperMon",
    category: "games",
    description:
      "A Pokémon-inspired platformer built in Unity and C# as part of a collaborative exam project. Inspired by our teacher's love of Pokémon, we made him the main character in a classic Super Mario-style adventure. Explore three handcrafted levels, collect coins and Poké Balls, catch Pokémon, battle unique enemies with different attack mechanics, uncover hidden easter eggs, and track your score. The game features custom gameplay systems, animations, artwork, music, and a level selection menu, all created from scratch by our team. My contributions included developing core gameplay mechanics, enemy behaviors, player interactions, UI systems, custom animations, visual effects, and helping shape the overall game experience, while the artwork was created by our artist.",
    html_url: "https://github.com/Zypherkill/Exam",
    liveUrl: "https://zypherkill.github.io/supermon/",
    languages: ["CSharp", "HTML", "CSS"],
    tech: ["Unity"],
    screenshot: `${import.meta.env.BASE_URL}projects/SuperMon.png`,
  },
  {
    id: "macservice",
    name: "MAC Service",
    category: "frontend",
    description:
      "MAC Service Website – A modern business website for a local service company. Built with React, Vite, and Framer Motion, featuring responsive design, SEO optimization, accessibility improvements, contact form integration, and custom domain deployment.",
    html_url: "https://github.com/Hallonpaj1/MACService",
    liveUrl: "https://mackoping.se",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["React", "Vite", "Framer Motion"],
    screenshot: `${import.meta.env.BASE_URL}projects/MacService.png`,
  },
  {
    id: "iron-turtles",
    name: "The Turtlebase",
    category: "frontend",
    description:
      "Movie discovery and watchlist app built with React, Vite, and Swiper for browsing, searching, and saving films.",
    html_url: "https://github.com/Tivva34/Iron-Turtles",
    liveUrl: "https://tivva34.github.io/Iron-Turtles/",
    languages: ["JavaScript", "HTML", "CSS"],
    tech: ["React", "Vite", "Swiper"],
    screenshot: `${import.meta.env.BASE_URL}projects/iron-turtles.png`,
  },
];
