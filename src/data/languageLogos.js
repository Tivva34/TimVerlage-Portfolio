export const techLogos = {
  /* Languages */
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  HTML:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  CSharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",

  /* Frameworks & Libraries */
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  ReactRouter:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reactrouter.svg",
  Vite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  FramerMotion:
    "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  Swiper:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/swiper.svg",

  /* Game Development */
  Unity:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",

  /* Backend / Cloud */
  NodeJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  AWS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  DynamoDB:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazondynamodb.svg",

  /* APIs */
  API:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg",
  NASAAPI:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nasa.svg",

  /* CSS Frameworks */
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",

  /* Tools */
  Git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  /* Browser APIs */
  LocalStorage:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
};

export const getTechKey = (tech) => {
  const aliases = {
    "C#": "CSharp",
    "C++": "CPlusPlus",
    "Framer Motion": "FramerMotion",
    "React Router": "ReactRouter",
    "Node.js": "NodeJS",
    "API Gateway": "AWS",
    Lambda: "AWS",
    "NASA API": "NASAAPI",
  };

  return aliases[tech] || tech;
};