import { About } from "./pages/About/About";
import "./App.scss";

import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Projects } from "./pages";
import { CV, Email, GitHub, LinkedIn } from "./assets";

export const App = () => {
  const location = useLocation();

  return (
    <div className="background">
      <div className="container">
        <div className="title">
          <div className="title__title">TOM CARTWRIGHT</div>
          <div className="title__subtitle">SOFTWARE ENGINEER</div>
        </div>
        <div className="nav">
          <Link
            className={`nav__link ${
              location.pathname === "/" && "nav__link--selected"
            }`}
            to="/"
          >
            ABOUT
          </Link>
          <Link
            className={`nav__link ${
              location.pathname === "/projects" && "nav__link--selected"
            }`}
            to="/projects"
          >
            PROJECTS
          </Link>
          <a className="nav__link" href={CV} download>
            CV
          </a>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <div className="footer">
          <div className="footer__items">
            <a
              className="footer__items__item"
              href="https://github.com/cartmouse"
              target="_blank"
            >
              <img src={GitHub}></img>
            </a>
            <a
              className="footer__items__item"
              href="https://linkedin.com/in/tom-cartwright97"
              target="_blank"
            >
              <img src={LinkedIn}></img>
            </a>
            <a
              className="footer__items__item"
              href="mailto:tom-cartwright@outlook.com"
              target="_blank"
            >
              <img src={Email}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
