
import "./Home.css";
import photo from "./photo/1.png";
import Header from "./components/Header";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

import {
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaVuejs,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaCode,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiNuxtdotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiVuetify,
  SiRedux,
  SiJest,
  SiOpenai,
} from "react-icons/si";


export default function Home() {
  const skillsSectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "JavaScript", icon: <FaJsSquare color="#F0DB4F" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <FaReact color="#61DBFB" /> },
        { name: "Vue.js", icon: <FaVuejs color="#42B883" /> },
        { name: "Nuxt.js", icon: <SiNuxtdotjs color="#00DC82" /> },
        { name: "Vite", icon: <SiVite color="#646CFF" /> },
        { name: "React Router", icon: <FaReact color="#CA4245" /> },
      ],
    },
    {
      title: "Backend & Databases",
      icon: <FaServer />,
      skills: [
        { name: "Node.js (Basics)", icon: <FaNodeJs color="#68A063" /> },
        { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
        { name: "Express.js", icon: <SiExpress color="#777777" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      ],
    },
    {
      title: "Styling & UI",
      icon: <FaMobileAlt />,
      skills: [
        { name: "CSS", icon: <FaCss3Alt color="#264DE4" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
        { name: "Vuetify", icon: <SiVuetify color="#1867C0" /> },
        { name: "Responsive Design", icon: <FaMobileAlt color="#00BCD4" /> },
      ],
    },
    {
      title: "State Management",
      icon: <FaReact />,
      skills: [
        { name: "Context API", icon: <FaReact color="#61DBFB" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "React Hooks", icon: <FaReact color="#61DBFB" /> },
      ],
    },
    {
      title: "APIs & Integrations",
      icon: <FaServer />,
      skills: [
        { name: "REST APIs", icon: <FaServer color="#009688" /> },
        { name: "OpenAI APIs", icon: <SiOpenai color="#10A37F" /> },
        { name: "Integrations", icon: <FaServer color="#06B6D4" /> },
      ],
    },
    {
      title: "Platforms & Tools",
      icon: <FaTools />,
      skills: [
        { name: "Liferay DXP", icon: <FaServer color="#0B63CE" /> },
        { name: "Client Extensions", icon: <FaCode color="#4F46E5" /> },
        { name: "Workflows", icon: <FaTools color="#F59E0B" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#808080" /> },
      ],
    },
    {
      title: "Testing & Other",
      icon: <FaCode />,
      skills: [
        { name: "Jest", icon: <SiJest color="#C21325" /> },
        { name: "PWA", icon: <FaMobileAlt color="#5A0FC8" /> },
        { name: "SEO", icon: <FaCode color="#22C55E" /> },
      ],
    },
  ];

  useEffect(() => {
    const skillCards = skillsSectionRef.current?.querySelectorAll(".skill-card");

    if (!skillCards?.length) return undefined;
    if (!("IntersectionObserver" in window)) {
      skillCards.forEach((card) => card.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    skillCards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />

      <section className="home">
        <div className="home-text">
          <h2>Hello 👋</h2>
          <h1>
            I'm <span>Ahmad Hamdy </span>
          </h1>
          <h3 className="typing">
            <Typewriter
              words={[
                "full-Stack Developer",
                "Front-End Developer (React.js)",
                "Back-End Developer (Node.js)",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}

            />
          </h3>


          <p>
            Software Developer specializing in Front-End development with
            React.js, JavaScript, and TypeScript. Experienced in building
            scalable, responsive, and user-friendly web applications,
            including live production projects.
            <br />
            <br />
            Skilled in state management, API integration, performance
            optimization, and developing reusable UI components.
            Passionate about writing clean, maintainable code and
            delivering seamless digital experiences.
          </p>


          <div className="home-buttons">
            <a href="/projects" className="btn primary">
              View Projects
            </a>
            <a href="/contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={photo} alt="Ahmad Elattar" />
        </div>
      </section>
      <section className="skills-section" ref={skillsSectionRef} aria-labelledby="skills-title">
        <div className="skills-heading">
          <span className="skills-eyebrow">MY EXPERTISE</span>
          <h2 id="skills-title">Tools of the trade<span>.</span></h2>
          <p>A considered toolkit for creating thoughtful, dependable digital experiences.</p>
        </div>
        <div className="skills-categories">
          {skillCategories.map((category) => (
            <article className="skill-category" key={category.title}>
              <div className="skill-category-heading">
                <span className="category-icon" aria-hidden="true">{category.icon}</span>
                <h3>{category.title}</h3>
                <span className="category-count">{String(category.skills.length).padStart(2, "0")}</span>
              </div>
              <div className="skill-grid">
                {category.skills.map((skill, index) => (
                  <div
                    className="skill-card"
                    key={skill.name}
                    style={{ "--skill-index": index }}
                  >
                    <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
