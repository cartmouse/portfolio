import "./Projects.scss";
import { MutableRefObject } from "react";
import { Band } from "@Components";
import { infoMap, Project } from "@Projects";
import { BandRefs, useScrollTrigger } from "@Utils";
import { LinkButton } from "../Components/LinkButton/LinkButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <div className="cat-header">
            <h2 className="title" ref={(r) => r && titleRefs.current.push(r)}>
              {title}
            </h2>
            <p className="description">{description}</p>
          </div>
          <Category projects={projects} category={anchor} />
        </div>
      ))}
    </div>
  );
};

const Category = ({
  projects,
  category,
  limit = 2,
}: {
  projects: Project[];
  category: string;
  limit?: number;
}) => {
  if (projects.length <= limit) {
    return (
      <div className="bands">
        {projects.map((info, i) => (
          <Band key={i} info={info} index={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="bands">
      {projects.slice(0, limit).map((info, i) => (
        <Band key={i} info={info} index={i} />
      ))}
      <div className="see-more">
        <Slider
          className="images"
          dots
          slidesToShow={window.innerWidth >= 650 ? 3 : 1}
        >
          {projects.slice(limit, limit + 3).map(({ images }) => (
            <img src={images?.[0].src} alt={images?.[0].alt} />
          ))}
        </Slider>
        <LinkButton
          link={{ text: "More Projects", url: `/projects/${category}` }}
          target="_self"
        />
      </div>
    </div>
  );
};
