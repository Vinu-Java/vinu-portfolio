import "../style/achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="container">
      <h2 className="section-title">Achievements</h2>

      <div className="achievements-wrapper">

        <div className="achievement-card highlight">
          <h3>Competitive Programming & Coding Profiles</h3>

          <ul className="achievement-points">
            <li>
              Solved <strong>150+</strong> problems on LeetCode
            </li>
            <li>
              Solved <strong>50+</strong> problems on GeeksforGeeks
            </li>
            <li>
              Earned <strong>HackerRank Stars</strong> in Java and Problem
              Solving
            </li>
            <li>Consistently practicing DSA and core programming concepts</li>
          </ul>

          <div className="achievement-links">
            <a href="https://leetcode.com/u/vinu-ad/" target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <a href="https://www.geeksforgeeks.org/profile/vinuad?tab=activity" target="_blank" rel="noreferrer">
              GeeksforGeeks
            </a>
            <a href="https://www.hackerrank.com/profile/VINU_JAVA" target="_blank" rel="noreferrer">
              HackerRank
            </a>
            <a href="https://github.com/Vinu-Java" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="achievement-card">
          <h3>Java & Backend Development</h3>
          <p>
            Designed and developed multiple Java-based applications including a{" "}
            <strong>Banking Application</strong> and{" "}
            <strong>Movie Booking System</strong>, implementing Core Java, JDBC,
            Servlets, JSP, and MySQL with complete CRUD functionality.
          </p>
        </div>

        <div className="achievement-card">
          <h3>Full-Stack Project Experience</h3>
          <p>
            Built full-stack applications using <strong>React</strong> for the
            frontend and <strong>Spring Boot</strong> for the backend, focusing
            on RESTful APIs, clean architecture, and maintainable code.
          </p>
        </div>

        <div className="achievement-card">
          <h3>Tools, Practices & Collaboration</h3>
          <p>
            Hands-on experience with{" "}
            <strong>Git, GitHub, Maven, Postman</strong>, and modern IDEs.
            Followed best practices such as modular design, version control, and
            clear project structure.
          </p>
        </div>
      </div>
    </section>
  );
}
