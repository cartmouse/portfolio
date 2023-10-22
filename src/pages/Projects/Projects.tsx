import { useState } from "react";
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
    title: "Eva's Talking Buttons",
    text: "An aid for people who sometimes prefer to remain non-verbal. Customisable buttons that use the device's text-to-speech engine to say the words aloud.",
    image: EvasButtons,
  },
  {
    title: "TouchFree",
    text: "An engine for mid-air interaction and tooling library for web application development",
  },
];

export const Projects = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="projects">
      {projects.map(({ title, text, image }, index) => {
        return (
          <Project
            title={title}
            desc={text}
            image={image}
            key={index}
            display={selected === title}
            onClick={() => setSelected((t) => (t === title ? "" : title))}
          />
        );
      })}
    </div>
  );
};
