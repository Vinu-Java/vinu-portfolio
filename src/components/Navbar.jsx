import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);

    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}

      <nav className="navbar">
        <button type="button" className="logo" onClick={() => scrollToSection("hero")} aria-label="Scroll to Hero section">
          Vinu's Portfolio
        </button>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open}>
          ☰
        </button>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li>
            <button type="button" onClick={() => scrollToSection("hero")} aria-label="Scroll to Hero section">
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("about")} aria-label="Scroll to About section">
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("skills")} aria-label="Scroll to Skills section">
              Skills
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("projects")} aria-label="Scroll to Projects section">
              Projects
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("certifications")} aria-label="Scroll to Certifications section">
              Certifications
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("education")} aria-label="Scroll to Education section">
              Education
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("achievements")} aria-label="Scroll to Achievements section">
              Achievements
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection("contact")} aria-label="Scroll to Contact section">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
