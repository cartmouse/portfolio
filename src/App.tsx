import { useState, useEffect, useRef } from "react";
import "./App.scss";
import colors from "./vars.module.scss";

import { Band } from "./Band";
import { About, Projects, ImageLinks } from "./Components";

export const App = () => {
  const [url, setUrl] = useState("");
  const bandRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.addEventListener("hashchange", (event) => {
      setUrl(event.newURL);
    });
    window.addEventListener("scroll", () => {
      bandRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const top = rect.top;
        if (top >= 0 && top < 50) {
          setUrl(window.location.origin + `/#${ref.id}`);
        }
      });
    });
  }, []);

  return (
    <div className="background">
      <div className="container" id="" ref={(r) => bandRefs.current.push(r)}>
        <div className="title">
          <div className="title__title">TOM CARTWRIGHT</div>
          <div className="title__subtitle">CARTMOUSE | SOFTWARE ENGINEER</div>
        </div>
        <div className="nav">
          <NavLink text="HOME" url={url} anchor="#" />
          <NavLink text="ABOUT" url={url} anchor="#about" />
          <NavLink text="PROJECTS" url={url} anchor="#projects" />
        </div>
        <Band
          color={colors["indigoDye2"]}
          id="about"
          bandRefs={bandRefs}
          circle
        >
          <About />
        </Band>
        <Projects url={url} bandRefs={bandRefs} />
        <div className="footer">
          <ImageLinks />
          <div className="footer__attr">
            Favicon by{" "}
            <a
              href="https://dribbble.com/limastd?ref=svgrepo.com"
              target="_blank"
            >
              Lima Studio
            </a>{" "}
            in CC Attribution License via{" "}
            <a href="https://www.svgrepo.com/" target="_blank">
              SVG Repo
            </a>
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
