import { projects } from "../data/projects";
import '../style/projects.css';

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>

      <div className="projects-list">
        {projects.map((p, index) => (
          <div
            className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
            key={p.id}
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
        ))}
      </div>
    </section>
  );
}
