import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import { useAurora } from './hooks/useAurora.js';

export const BASE_PATH = '/TimVerlage-Portfolio';

export function navigateTo(path) {
  window.history.pushState(null, '', BASE_PATH + path);
  window.dispatchEvent(new Event('popstate'));
}

function App() {
  useAurora();
  const getProjectSlug = () => {
    const path = window.location.pathname;
    const prefix = `${BASE_PATH}/projects/`;
    if (path.startsWith(prefix)) {
      return path.replace(prefix, '');
    }
    return null;
  };

  const [projectSlug, setProjectSlug] = useState(getProjectSlug);

  useEffect(() => {
    const handlePopState = () => {
      setProjectSlug(getProjectSlug());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (projectSlug) {
      window.scrollTo(0, 0);
    }
  }, [projectSlug]);

  useEffect(() => {
    console.info(
      'Tim\'s Portfolio: Enjoy the page, don\'t forget to run Lighthouse or a similar check. ;)'
    );
  }, []);

  return (
    <>
      <a 
        className="skip-link" 
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById('main-content');
          if (main) main.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        {projectSlug ? (
          <ProjectDetail slug={projectSlug} />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </main>
    </>
  );
}

export default App;
