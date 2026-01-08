import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}

      <nav className="navbar">
        <a href="#hero" className="logo" onClick={() => setOpen(false)}>
          Vinu's Portfolio
        </a>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li>
            <a href="#hero" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={() => setOpen(false)}>
              Certifications
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setOpen(false)}>
              Education
            </a>
          </li>
          <li>
            <a href="#achievements" onClick={() => setOpen(false)}>
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
