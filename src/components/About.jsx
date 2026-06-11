import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const boxMotion = shouldReduceMotion
    ? { initial: false }
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.35 }, viewport: { amount: 0.35 } };

  const subBoxMotion = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { delay, duration: 0.35 }, viewport: { amount: 0.35 } };

  const bringCards = [
    { title: "Modern Tech Stack", text: "Proficient in React, JavaScript (ES6+), and modern tools. I stay current with best practices and emerging technologies.",},
    { title: "Problem-Solving Mindset", text: "I approach challenges methodically, breaking complex requirements into manageable solutions.",},
    { title: "User-Focused Design", text: "I prioritize responsive design and user experience across all devices and platforms.",},
    { title: "Growth-Oriented", text: "I seek feedback, embrace challenges, and thrive in collaborative development environments.",},
  ];

const tools = [
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "NPM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Insomnia", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Chrome DevTools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
  { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Wix", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/wix.svg" },
];

  return (
    <section id="about" className="bring-section">
      {/* About Box */}
      <motion.div
        className="about-box"
        {...boxMotion}
      >
        <h2>About Me</h2>
        <p>
          My programming journey began in 2020 during game development studies,
          where I discovered my passion for solving problems through code. 
          This led me to focus on web development, crafting meaningful
          user experiences using modern frontend technologies.
        </p>

        {/* About inner boxes */}
        <div className="about-subgrid">
          <motion.div
            className="about-subbox"
            {...subBoxMotion()}
          >
            I'm currently deepening my React skills — working with component
            architecture, API integration, and performance optimization.
          </motion.div>
          <motion.div
            className="about-subbox"
            {...subBoxMotion(0.2)}
          >
            I'm learning backend integration with Node.js to expand full-stack capabilities.
          </motion.div>
        </div>
      </motion.div>

      {/* What I Bring Cards */}
      <div className="bring-grid">
        {bringCards.map((card, index) => (
          <motion.div
            className="bring-card"
            key={index}
            {...(shouldReduceMotion
              ? { initial: false }
              : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.05 * index, duration: 0.35 }, viewport: { amount: 0.35 } })}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Tools Section */}
      <section id="tools" className="tools-section">
        <h2>Tools & Frameworks</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
            className="tool-card"
            key={index}
              {...(shouldReduceMotion
                ? { initial: false }
                  : { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.05 * index, duration: 0.35 }, viewport: { amount: 0.35 } })}
          >
              <img src={tool.logo} alt={tool.name} className="tool-logo" />
              <p>{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}