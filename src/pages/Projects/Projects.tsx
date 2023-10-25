import { useMemo, useState } from "react";
import "./Projects.scss";

interface ProjectInfo {
  title: string;
  text: string;
  image?: string;
}

const projects: ProjectInfo[] = [
  {
    title: "EVIE'S TALKING BUTTONS",
    text: "An aid for people who sometimes prefer to remain non-verbal. Customisable buttons that use the device's text-to-speech engine to say the words aloud.",
    // image: EviesButtons,
  },
  {
    title: "TOUCHFREE",
    text: "An engine for mid-air interaction and tooling library for web application development",
  },
  {
    title: "BALLPIT",
    text: "3D interactable ballpit, created as a demo for TouchFree.",
  },
  {
    title: "STOREFRONT",
    text: "A quick service retail application, created as a demo for TouchFree.",
  },
  {
    title: "SHOOH",
    text: "A product customisation application, created as a demo for TouchFree.",
  },
];

export const Projects = () => {
  const [selected, setSelected] = useState("EVIE'S TALKING BUTTONS");

  const selectedProject = useMemo(
    () => projects.filter((project) => project.title === selected)[0],
    [selected]
  );

  return (
    <div className="projects">
      <div className="projects__titles">
        {projects.map(({ title }, index) => {
          return (
            <div
              key={index}
              className={`projects__titles__title ${
                selected === title && "projects__titles__title--selected"
              }`}
              onClick={() => setSelected((t) => (t === title ? "" : title))}
            >
              {title}
            </div>
          );
        })}
      </div>
      <div className="projects__display">
        <div className="projects__display__content">
          <div className="projects__display__content__text">
            {selectedProject?.text}
          </div>
          <img
            className="projects__display__content__image"
            src={selectedProject?.image}
          ></img>
        </div>
      </div>
    </div>
  );
};
