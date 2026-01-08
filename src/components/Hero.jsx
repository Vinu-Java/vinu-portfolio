// import profileImg from "/images/profile_passport_size.jpeg";
import profileImg from "/images/profile.jpg";
import "../style/hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <h1>Hi, I'm Vinu 👋</h1>
        <h2>Java Full Stack Developer</h2>

        <p>
          I build scalable backend applications using Java, Spring Boot, and
          MySQL, and develop responsive user interfaces using React. I'm
          actively growing as a Java full-stack developer.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a
            href="../assets/VINU_V_Java_Resume.pdf"
            className="btn secondary"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profileImg} alt="Vinu profile" />
      </div>
    </section>
  );
}
