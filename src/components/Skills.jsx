import { skills, tools } from "../data/skills";
import '../style/skills.css';

export default function Skills() {
  return (
    <>
      <section id="skills" className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-wrapper">
          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>
      
      <section id="skills" className="container">
        <h2 className="section-title">Tools</h2>

        <div className="skills-wrapper">
          {tools.map((tool) => (
            <span className="skill-chip" key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
