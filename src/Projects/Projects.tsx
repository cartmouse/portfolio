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
      {infoMap.map(({ title, anchor, projects }, i) => (
        <div
          key={anchor}
          className={`category ${i % 2 !== 0 && "alt-background"}`}
        >
          <div
            className="anchor"
            id={`${anchor}`}
            ref={(r) => (bandRefs.current[`projects/${anchor}`] = r)}
          />
          <h2 className="title" ref={(r) => r && titleRefs.current.push(r)}>
            {title}
          </h2>
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
