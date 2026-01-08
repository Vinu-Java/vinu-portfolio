import "../style/education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-row">
          <div className="edu-left">
            <h3>Bachelor of Technology (B.Tech) - Artificial Intelligence & Data Science</h3>
            <p>Bannari Amman Institute of Technology, Erode</p>
          </div>

          <div className="edu-right">
            <span>Affiliated  to Anna University</span>
            <span>2021 - 2025</span>
            <span className="grade">CGPA: 7.74</span>
          </div>
        </div>

        <div className="education-row">
          <div className="edu-left">
            <h3>Higher Secondary Education (HSE) - Computer Science</h3>
            <p>Model School, Kallakurichi</p>
          </div>

          <div className="edu-right">
            <span>State Board of Tamil Nadu</span>
            <span>2019 - 2021</span>
            <span className="grade">Percentage: 81%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
