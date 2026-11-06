
import { useEffect, useRef } from "react";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Header from "./components/Header";
import "./Experience.css";

export const experiences = [
  {
    company: "Digital Brain",
    title: "Frontend Developer",
    duration: "January 2026 – Present",
    location: "Cairo, Egypt (Hybrid)",
    current: true,
    responsibilities: [
      "Developing responsive user interfaces using React.js, Vue.js, and Liferay.",
      "Integrating APIs to connect frontend applications with backend services.",
      "Identifying and fixing bugs to improve application stability.",
      "Enhancing frontend functionality and user experience across web applications.",
    ],
    technologies: [
      "React.js",
      "Vue.js",
      "Liferay",
      "REST APIs",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    company: "Information Technology Institute (ITI)",
    title: "MERN Stack Development Trainee",
    duration: "August 2025 – December 2025",
    location: "Cairo, Egypt",
    responsibilities: [
      "Completed technical training focused on MERN Stack web development.",
      "Developed practical skills in building full-stack web applications.",
      "Strengthened frontend and backend development fundamentals.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
    ],
  },
  {
    company: "intella",
    title: "Frontend Engineer Intern",
    duration: "May 2025 – July 2025",
    location: "Hybrid",
    responsibilities: [
      "Built responsive web interfaces using React.js, Vue.js, and TypeScript.",
      "Practiced API integration and frontend debugging.",
      "Improved frontend development skills and applied best practices.",
    ],
    technologies: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "REST APIs",
      "Responsive Design",
    ],
  },
  {
    company: "CodeAlpha",
    title: "Frontend Developer Intern",
    duration: "January 2025 – March 2025",
    location: "Remote",
    responsibilities: [
      "Completed a remote Frontend Development internship.",
      "Worked on responsive UI tasks using HTML, CSS, JavaScript, and React.js.",
      "Improved debugging and component-based development skills.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Design",
    ],
  },
];

export function ExperienceCard({ experience }) {
  return (
    <article
      className="experience-card"
      aria-label={`${experience.title} at ${experience.company}`}
    >
      <div className="experience-card-heading">
        <div>
          <h2>{experience.title}</h2>
          <p className="experience-company">{experience.company}</p>
        </div>

        {experience.current && (
          <span className="experience-current">Current role</span>
        )}
      </div>

      <div className="experience-meta">
        <span>
          <FaRegCalendarAlt aria-hidden="true" />
          {experience.duration}
        </span>

        <span>
          <FaMapMarkerAlt aria-hidden="true" />
          {experience.location}
        </span>
      </div>

      <ul className="experience-responsibilities">
        {experience.responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>

      <div className="experience-stack">
        <h3>Technologies</h3>

        <ul
          className="experience-technologies"
          aria-label="Technologies"
        >
          {experience.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (
      !window.IntersectionObserver ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("experience-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const items = timelineRef.current.querySelectorAll(".experience-item");

    items.forEach((item) => {
      item.classList.add("experience-pending");
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      items.forEach((item) =>
        item.classList.remove("experience-pending")
      );
    };
  }, []);

  return (
    <div>
      <Header />

      <main className="experience-page">
        <header className="experience-intro">
          <p className="experience-eyebrow">Career journey</p>

          <h1>
            Professional <span>Experience</span>
          </h1>

          <p className="experience-subtitle">
            My journey as a Frontend Developer, gaining hands-on
            experience in building responsive web applications,
            integrating APIs, and developing modern user interfaces.
          </p>
        </header>

        <ol
          className="experience-timeline"
          ref={timelineRef}
          aria-label="Professional experience, most recent first"
        >
          {experiences.map((experience) => (
            <li className="experience-item" key={experience.company}>
              <span
                className="experience-dot"
                aria-hidden="true"
              />

              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
