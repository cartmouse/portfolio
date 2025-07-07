import { useState, useEffect, useRef } from "react";
import "./App.scss";
import { About } from "@Components";
import { Footer } from "./Components/Footer/Footer";
import { BandRefs } from "@Utils";
import { infoMap, Projects } from "@Projects";

export const App = () => {
  const [url, setUrl] = useState("");
  const bandRefs = useRef<BandRefs>({});

  useEffect(() => {
    window.addEventListener("hashchange", (event) => {
      setUrl(event.newURL);
    });
    window.addEventListener("scrollend", () => {
      Object.values(bandRefs.current).forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const top = rect.top;
        if (top >= -50 && top < 150) {
          setUrl(window.location.origin + `/#${ref.id}`);
        }
      });
    });
  }, []);

  return (
    <div className="background">
      <div
        className="container"
        id=""
        ref={(r) => (bandRefs.current["home"] = r)}
      >
        <div className="front">
          <div className="title">
            <div className="name">Tom Cartwright</div>
            <div className="subname">cartmouse</div>
          </div>
          <div className="tagline">
            <p className="line">Creative Programmer</p>
            <br />
            <p className="line">Software Engineer</p>
          </div>
          <div className="tech">Games | Interactive Experiences | Audio</div>
        </div>
        <div className="nav">
          <NavLink text="Home" url={url} anchor="#" />
          <NavLink text="About" url={url} anchor="#about" />
          <span>|</span>
          {infoMap.map(({ title, anchor }) => {
            const anchorString = `#${anchor}`;
            const selected = url.includes(anchorString);
            return (
              <a
                key={anchorString}
                className={`nav-item ${selected && "selected"}`}
                href={anchorString}
              >
                {title}
              </a>
            );
          })}
        </div>
        <div
          className="anchor"
          id="about"
          ref={(r) => (bandRefs.current["about"] = r)}
        />
        <About />
        <Projects url={url} bandRefs={bandRefs} />
        <Footer altBackground />
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
    <a className={`nav-item ${selected && "selected"}`} href={anchor}>
      {text}
    </a>
  );
};
