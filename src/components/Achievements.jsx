import "../style/achievements.css";
import useScrollReveal from "../hooks/useScrollReveal";

function AchievementCard({ children, delay }) {
  const { ref, isVisible } = useScrollReveal({
    once: false,
    threshold: 0.25,
  });

  return (
    <div
      ref={ref}
      className={`achievement-card reveal ${isVisible ? "active" : ""}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div className="achievements-wrapper">
          <AchievementCard delay="0.1s">
            <h3>Competitive Programming & Coding Profiles</h3>

            <ul className="achievement-points">
              <li>
                Solved <strong>150+</strong> problems on LeetCode
              </li>
              <li>
                Earned <strong>HackerRank Stars</strong> in Java
              </li>
              <li>
                Solved <strong>50+</strong> problems on GeeksforGeeks
              </li>
              <li>Consistently practicing DSA</li>
            </ul>

            <div className="achievement-links">
              <a
                href="https://leetcode.com/u/vinu-ad/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>
              <a
                href="https://www.hackerrank.com/profile/VINU_JAVA"
                target="_blank"
                rel="noreferrer"
              >
                HackerRank
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/vinuad?tab=activity"
                target="_blank"
                rel="noreferrer"
              >
                GeeksforGeeks
              </a>
              <a
                href="https://github.com/Vinu-Java"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </AchievementCard>

          <AchievementCard delay="0.25s">
            <h3>Java & Backend Development</h3>
            <p>
              Designed and developed Java-based applications using Core Java,
              JDBC, Servlets, JSP, and MySQL with complete CRUD functionality.
            </p>
          </AchievementCard>

          <AchievementCard delay="0.4s">
            <h3>Full-Stack Project Experience</h3>
            <p>
              Built full-stack applications using React and Spring Boot,
              focusing on RESTful APIs and clean architecture.
            </p>
          </AchievementCard>

          <AchievementCard delay="0.55s">
            <h3>Tools, Practices & Collaboration</h3>
            <p>
              Hands-on experience with Git, GitHub, Maven, Postman, and modern
              IDEs following best practices.
            </p>
          </AchievementCard>
        </div>
      </div>
    </section>
  );
}
