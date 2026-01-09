import "../style/contact.css";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <div className="contact-cards">
            <div className="contact-card">
              <h3>Contact Details</h3>

              <div className="contact-row">
                <span>Name</span>
                <p>VINU V</p>
              </div>

              <div className="contact-row">
                <span>Role</span>
                <p>Aspiring Java / Full-Stack Developer</p>
              </div>

              <div className="contact-row">
                <span>Location</span>
                <p>Tamil Nadu, India</p>
              </div>

              <div className="contact-row">
                <span>Email</span>
                <a href="mailto:vinuv.eng@gmail.com">vinuv.eng@gmail.com</a>
              </div>

              <div className="contact-row">
                <span>Phone</span>
                <a href="tel:+919500882368">+91 9500882368</a>
              </div>
            </div>

            <div className="contact-card contact-social-card">
              <h3>Connect with Me</h3>

              <div className="social-card-links">
                <a
                  href="https://github.com/Vinu-Java"
                  target="_blank"
                  className="social-card github"
                >
                  <img
                    src="/icons/github.png"
                    alt="Github logo"
                    className="icon"
                  />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/vinu-java"
                  target="_blank"
                  className="social-card linkedin"
                >
                  <img
                    src="/icons/linkedin.png"
                    alt="LinkedIn logo"
                    className="icon"
                  />
                  LinkedIn
                </a>

                <a
                  href="https://leetcode.com/u/vinu-ad/"
                  target="_blank"
                  className="social-card instagram"
                >
                  <img
                    src="/icons/leetcode.png"
                    alt="Leetcode logo"
                    className="icon"
                  />
                  Leetcode
                </a>

                <a
                  href="https://www.hackerrank.com/profile/VINU_JAVA"
                  target="_blank"
                  className="social-card instagram"
                >
                  <img
                    src="/icons/hackerrank.png"
                    alt="HackerRank logo"
                    className="icon"
                  />
                  HackerRank
                </a>

                <a
                  href="https://www.geeksforgeeks.org/profile/vinuad?tab=activity"
                  target="_blank"
                  className="social-card geeksforgeeks"
                >
                  <img
                    src="/icons/geeksforgeeks.png"
                    alt="GeeksForGeeks logo"
                    className="icon"
                  />
                  GeeksForGeeks
                </a>

                <a
                  href="https://wa.me/919500882368?text=Hello%20Vinu,%20I%20saw%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card whatsapp"
                >
                  <img
                    src="/icons/whatsapp.png"
                    alt="WhatsApp logo"
                    className="icon"
                  />
                  WhatsApp
                </a>

                <a
                  href="https://www.instagram.com/vinu_v_ofcl/"
                  target="_blank"
                  className="social-card instagram"
                >
                  <img
                    src="/icons/instagram.png"
                    alt="Instagram logo"
                    className="icon"
                  />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Vinu. All rights reserved.
      </footer>
    </>
  );
}
