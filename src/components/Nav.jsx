import { useEffect, useState } from "react";
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

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
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