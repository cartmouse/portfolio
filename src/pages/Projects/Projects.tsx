import { useState } from "react";
import { Project } from "./Project";
import Madronzio from "../../assets/madronzio.png";
import "./Projects.scss";

interface ProjectInfo {
  title: string;
  text: string;
  image: string;
}

const projects: ProjectInfo[] = [
  { title: "TEST", text: "A description of a project", image: Madronzio },
  { title: "TEST 2", text: "A description of a project", image: Madronzio },
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
