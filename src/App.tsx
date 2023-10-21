import { About } from "./pages/About/About";
import "./App.scss";

import { Link, Route, Routes, useLocation } from "react-router-dom";
import { CV, Projects } from "./pages";

export const App = () => {
  const location = useLocation();

  return (
    <div className="background">
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
        <Link
          className={`nav__link ${
            location.pathname === "/cv" && "nav__link--selected"
          }`}
          to="/cv"
        >
          CV
        </Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </div>
  );
};
