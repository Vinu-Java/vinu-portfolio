import { projects } from "../data/projects";
import "../style/projects.css";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-list">
          {projects.map((p, index) => {
            const { ref, isVisible } = useScrollReveal({
              once: false,
              threshold: 0.25,
            });

            return (
              <div
                key={p.id}
                ref={ref}
                className={`project-row reveal ${
                  index % 2 === 0 ? "reveal-right" : "reveal-left"
                } ${index % 2 !== 0 ? "reverse" : ""} ${
                  isVisible ? "active" : ""
                }`}
              >
                <div className="project-image">
                  <img src={p.image} alt={`${p.title} preview`} />
                </div>

                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <div className="tech-stack">
                    {p.tech.map((t) => (
                      <span className="tech-chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
