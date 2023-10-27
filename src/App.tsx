import { useState, useEffect } from "react";
import "./App.scss";

import { CV, Email, GitHub, LinkedIn } from "./assets";
import { Band } from "./Band";
import { About, Projects } from "./pages";

export const App = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    window.addEventListener("hashchange", (event) => {
      setUrl(event.newURL);
    });
  }, []);

  return (
    <div className="background">
      <div className="container">
        <div className="title" id="">
          <div className="title__title">TOM CARTWRIGHT</div>
          <div className="title__subtitle">SOFTWARE ENGINEER</div>
        </div>
        <div className="nav">
          <NavLink text="ABOUT" url={url} anchor="#" />
          <NavLink text="PROJECTS" url={url} anchor="#projects" />
          <a className="nav__link" href={CV} download>
            CV
          </a>
        </div>
        <Band color="#2a6f97" index={0} id="">
          <About />
        </Band>
        <Projects url={url} />
        <div className="footer">
          <div className="footer__items">
            <ImageLink href="https://github.com/cartmouse" image={GitHub} />
            <ImageLink
              href="https://linkedin.com/in/tom-cartwright97"
              image={LinkedIn}
            />
            <ImageLink href="mailto:tom-cartwright@outlook.com" image={Email} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  text: string;
  url: string;
  anchor: string;
}

const NavLink = ({ text, url, anchor }: NavLinkProps) => {
  const hash = `#${url.split("#").at(-1)}`;
  const selected =
    hash.startsWith(anchor) && hash.split("/")[0].endsWith(anchor);
  return (
    <a
      className={`nav__link ${selected && "nav__link--selected"}`}
      href={anchor}
    >
      {text.toUpperCase()}
    </a>
  );
};

interface ImageLinkProps {
  href: string;
  image: string;
}

const ImageLink = ({ href, image }: ImageLinkProps) => {
  return (
    <a className="footer__items__item" href={href} target="_blank">
      <img src={image}></img>
    </a>
  );
};
