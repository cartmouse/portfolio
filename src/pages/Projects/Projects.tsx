import { useMemo, useState } from "react";
import { Project } from "./Project";
import "./Projects.scss";
import { EvasButtons } from "../../assets";

interface ProjectInfo {
  title: string;
  text: string;
  image?: string;
}

const projects: ProjectInfo[] = [
  {
    title: "Evie's Talking Buttons",
    text: "An aid for people who sometimes prefer to remain non-verbal. Customisable buttons that use the device's text-to-speech engine to say the words aloud.",
    image: EvasButtons,
  },
  {
    title: "TouchFree",
    text: "An engine for mid-air interaction and tooling library for web application development",
  },
  {
    title: "Ballpit",
    text: "3D interactable ballpit, created as a demo for TouchFree.",
  },
  {
    title: "Storefront",
    text: "A quick service retail application, created as a demo for TouchFree.",
  },
  {
    title: "shOOH",
    text: "A product customisation application, created as a demo for TouchFree.",
  },
];

export const Projects = () => {
  const [selected, setSelected] = useState("Evie's Talking Buttons");

  const selectedProject = useMemo(
    () => projects.filter((project) => project.title === selected)[0],
    [selected]
  );

  return (
    <div className="projects">
      <div className="projects__titles">
        {projects.map(({ title }, index) => {
          return (
            <Project
              title={title}
              key={index}
              onClick={() => setSelected((t) => (t === title ? "" : title))}
            />
          );
        })}
      </div>
      <div className="projects__display">
        <div className="project__content">
          <div className="project__content__text">{selectedProject?.text}</div>
          <img
            className="project__content__image"
            src={selectedProject?.image}
          ></img>
        </div>
      </div>
    </div>
  );
};
