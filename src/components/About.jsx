import "../style/about.css";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal({ once: false });

  return (
    <section
      id="about"
      ref={ref}
      className={`about reveal reveal-left ${isVisible ? "active" : ""}`}
    >
      <div className="container">
        <h2 className="title">About Me</h2>

        <p>
          I am a <strong>Java Developer</strong> with a strong foundation in
          building reliable and scalable server-side applications. I enjoy
          solving real-world problems through clean code, efficient business
          logic, and well-structured APIs.
        </p>

        <p>
          I have hands-on experience with <strong>Java</strong>,{" "}
          <strong>Spring Boot</strong>, <strong>REST APIs</strong>, and{" "}
          <strong>MySQL</strong>, focusing on backend development, database
          design, and application performance.
        </p>

        <p>
          I also work with <strong>React</strong> to build responsive user
          interfaces and integrate them with backend services, enabling me to
          develop complete full-stack web applications.
        </p>
      </div>
    </section>
  );
}
