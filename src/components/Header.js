import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFilePdf, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      // Dark هو الافتراضي
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };
  return (
    <header className="header">
      <nav className="nav">
        <p className="logo">Ahmad Hamdy</p>
        <button onClick={toggleTheme} className="theme-toggle" title="Toggle Theme">
          {dark ? "◐" : "◑"}
        </button>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          &#9776;
        </div>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={location.pathname === "/experience" ? "active" : ""}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li className="social-links">
            <a href="/cv.pdf" download
              title="Download CV"
              className="cv-btn">
              <FaFilePdf />
            </a>
            <a href="https://github.com/ahmadhamdy14"
              target="_blank"
              rel="noreferrer"
              title="github">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-hamdy-031350374/"
              target="_blank"
              rel="noreferrer"
              title="linkedin"
            >
              <FaLinkedin />
            </a>
            <a href="https://wa.me/201069199985"
              target="_blank"
              rel="noreferrer"
              title="whatsapp">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
