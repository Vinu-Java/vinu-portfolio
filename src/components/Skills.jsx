import { skills, tools } from "../data/skills";
import "../style/skills.css";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Skills() {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal({
    once: false,
  });

  const { ref: toolsRef, isVisible: toolsVisible } = useScrollReveal({
    once: false,
  });

  return (
    <>
      {/* Skills */}
      <section
        id="skills"
        ref={skillsRef}
        className={`reveal ${skillsVisible ? "active" : ""}`}
      >
        <div className="container">
          <h2 className="section-title">Skills</h2>

          <div className="skills-wrapper">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`skill-chip reveal ${skillsVisible ? "active" : ""}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        ref={toolsRef}
        className={`reveal ${toolsVisible ? "active" : ""}`}
      >
        <div className="container">
          <h2 className="section-title">Tools</h2>

          <div className="skills-wrapper">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className={`skill-chip reveal ${toolsVisible ? "active" : ""}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
