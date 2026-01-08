import "../style/education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-row">
          <div className="edu-left">
            <h4>Bachelor of Computer Science</h4>
            <p>Bannari Amman Institute of Technology</p>
          </div>

          <div className="edu-right">
            <span>Anna University</span>
            <span>2025</span>
            <span className="grade">CGPA: X.XX</span>
          </div>
        </div>

        <div className="education-row">
          <div className="edu-left">
            <h4>Higher Secondary Education</h4>
            <p>Model School, Kallakurichi</p>
          </div>

          <div className="edu-right">
            <span>State Board of Tamil Nadu</span>
            <span>2021</span>
            <span className="grade">XX%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
