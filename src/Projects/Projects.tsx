import "./Projects.scss";
import { MutableRefObject } from "react";
import { Band } from "@Components";
import { infoMap } from "@Projects";
import { BandRefs, useScrollTrigger } from "@Utils";

interface ProjectsProps {
  url: string;
  bandRefs: MutableRefObject<BandRefs>;
}

export const Projects = ({ bandRefs }: ProjectsProps) => {
  const titleRefs = useScrollTrigger();

  return (
    <div className="projects">
      {infoMap.map(({ title, anchor, description, projects }, i) => (
        <div
          key={anchor}
          className={`category ${i % 2 !== 0 && "alt-background"}`}
        >
          <div
            className="anchor"
            id={`${anchor}`}
            ref={(r) => (bandRefs.current[`projects/${anchor}`] = r)}
          />
          <div className="header">
            <h2 className="title" ref={(r) => r && titleRefs.current.push(r)}>
              {title}
            </h2>
            <p className="description">{description}</p>
          </div>
          <div className="bands">
            {projects.map((info, i) => (
              <Band key={i} info={info} index={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
