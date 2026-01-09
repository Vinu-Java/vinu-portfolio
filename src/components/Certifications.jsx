import "../style/certifications.css";
import useScrollReveal from "../hooks/useScrollReveal";

function CertCard({ children, delay }) {
  const { ref, isVisible } = useScrollReveal({
    once: false,
    threshold: 0.25,
  });

  return (
    <div
      ref={ref}
      className={`cert-card reveal ${isVisible ? "active" : ""}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certification-grid">
          <CertCard delay="0.1s">
            <h4>SQL (Basic)</h4>
            <p>HackerRank</p>
            <a
              href="https://www.hackerrank.com/certificates/5df5a0e5e303"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate →
            </a>
          </CertCard>

          <CertCard delay="0.25s">
            <h4>Java (Basic)</h4>
            <p>HackerRank</p>
            <a
              href="https://www.hackerrank.com/certificates/2ba2c57139e2"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate →
            </a>
          </CertCard>

          <CertCard delay="0.4s">
            <h4>SQL for Beginners</h4>
            <p>Scaler</p>
            <a
              href="https://moonshot.scaler.com/s/sl/L7SB9iYnkm"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate →
            </a>
          </CertCard>

          <CertCard delay="0.55s">
            <h4>Java Programming</h4>
            <p>Great Learning</p>
            <a
              href="https://www.mygreatlearning.com/certificate/YPIZISHA"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate →
            </a>
          </CertCard>
        </div>
      </div>
    </section>
  );
}
