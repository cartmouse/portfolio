import "./App.scss";

import { CV, Email, GitHub, LinkedIn } from "./assets";
import { Band } from "./Band";
import { About, Projects } from "./pages";

export const App = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="title" id="">
          <div className="title__title">TOM CARTWRIGHT</div>
          <div className="title__subtitle">SOFTWARE ENGINEER</div>
        </div>
        <div className="nav">
          <a className="nav__link" href="#">
            HOME
          </a>
          <a className="nav__link" href="#about">
            ABOUT
          </a>
          <a className="nav__link" href="#projects">
            PROJECTS
          </a>
          <a className="nav__link" href={CV} download>
            CV
          </a>
        </div>
        <Band color="#2c7da0" index={0}></Band>
        <Band color="#2a6f97" index={1} id="about">
          <About />
        </Band>
        <Band color="#014f86" index={2} id="projects">
          <Projects />
        </Band>
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
