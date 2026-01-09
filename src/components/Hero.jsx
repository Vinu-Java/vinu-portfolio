import profileImg from "/images/profile.jpg";
import "../style/hero.css";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal({ once: false});

  return (
    <section
      id="hero"
      ref={ref}
      className={`hero reveal ${isVisible ? "active" : ""}`}
    >
      <div className={`hero-left reveal ${isVisible ? "active" : ""}`}>
        <h1>Hi, I'm Vinu 👋</h1>
        <h2>Java Full Stack Developer</h2>

        <p>
          I build scalable backend applications using Java, Spring Boot, and
          MySQL, and develop responsive user interfaces using React. I'm
          actively growing as a Java full-stack developer.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a
            href="/resume/VINU_V_Java_Resume.pdf"
            className="btn secondary"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>

          <a
            href="/resume/VINU_V_Java_Resume.pdf"
            download
            className="btn icon-btn"
            aria-label="Download Resume"
          >
            <img src="/icons/download.png" alt="Download resume" />
          </a>
        </div>
      </div>

      <div
        className={`hero-right reveal reveal-right ${
          isVisible ? "active" : ""
        }`}
      >
        <img src={profileImg} alt="Vinu profile" />
      </div>
    </section>
  );
}
