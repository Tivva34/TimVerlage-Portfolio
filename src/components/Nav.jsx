import { useEffect, useState } from "react";
import { BASE_PATH, navigateTo } from "../App.jsx";
import "../styles/Nav.css";

export default function Nav() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;

      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const isHomePage = window.location.pathname === BASE_PATH || window.location.pathname === BASE_PATH + '/';
    
    if (!isHomePage) {
      navigateTo('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.history.pushState(null, '', BASE_PATH + '/');
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`${BASE_PATH}/`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={active === link.id ? "active" : ""}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}