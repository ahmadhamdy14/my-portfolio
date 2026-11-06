import Header from "./components/Header";
import "./Projects.css";
import { useEffect } from "react";

import project1 from "./projects/project1.png";
import project2 from "./projects/project2.png";
import project3 from "./projects/project3.png";
import project4 from "./projects/project4.png";
import project5 from "./projects/project5.png";
import project6 from "./projects/project6.png";

const projectsData = [
  {
    title: "Tafhana Market (React & Firebase)",
    description: "A live, production-deployed Arabic e-commerce PWA built with React.js, Vite, and Firebase, featuring product management, authentication, role-based access, shopping cart, order management, medical services, and responsive RTL design.",
    image: project6,
    live: "https://tafhana-market.vercel.app/",
    github: "https://github.com/ahmadhamty14/Tafmana-Market",
  },
  {
    title: "CRUD App with javaScript",
    description: "A simple and responsive CRUD app made with HTML, CSS, and JavaScript, featuring animated backgrounds and smooth interactions.",
    image: project4,
    live: "https://cruds-teal-ten.vercel.app/",
    github: "https://github.com/ael3ttar14/CRUDS",
  },
  {
    title: "React Auth App",
    description: "Login & Register using React, JSON Server & LocalStorage.",
    image: project2,
    live: "#",
    github: "https://github.com/ael3ttar14/project-",
  },
  {
    title: "Find-Me",
    description: "A React app that matches faces in photos, connecting people across different ages. Uses image recognition to identify and link similar faces.",
    image: project3,
    live: "#",
    github: "https://github.com/ael3ttar14/find-me",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and responsive design.",
    image: project1,
    live: "https://my-portfolio-five-gamma-68.vercel.app/",
    github: "https://github.com/ael3ttar14/my-portfolio",
  },
  {
    title: "Light Gallery",
    description: "Responsive Photo Gallery with Lightbox (DOM Manipulation).",
    image: project5,
    live: "https://light-gallery-sandy.vercel.app/",
    github: "https://github.com/ael3ttar14/lightgallery",
  }
];

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="projects-section">
        <h1>Projects</h1>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card fade-in" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.live && project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
