import { MutableRefObject } from "react";
import { Band } from "../../Band";
import "./Projects.scss";
import colors from "../../vars.module.scss";
import { projectInfo } from "./ProjectInfo";

interface ProjectsProps {
  url: string;
  bandRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export const Projects = ({ url, bandRefs }: ProjectsProps) => {
  return (
    <div className="projects">
      <div className="anchor anchor--no-gap" id="projects" />
      <div className="projects__titles">
        {projectInfo.map(({ title, id }, index) => {
          return (
            <a
              id={id}
              key={index}
              className={`projects__titles__title ${
                url.includes(id) && "projects__titles__title--selected"
              }`}
              href={`#projects/${id}`}
            >
              {title}
            </a>
          );
        })}
      </div>
      <div className="projects__display">
        {projectInfo.map(({ title, text, image, id, links, video }, index) => {
          return (
            <Band
              color={index % 2 ? colors["uclaBlue"] : colors["cerulean"]}
              index={index}
              key={index}
              id={`projects/${id}`}
              double
              image={image}
              video={video}
              bandRefs={bandRefs}
            >
              <div className="band__content__text__title">{title}</div>
              <div className="band__content__text__text">{text}</div>
              <div className="band__content__text__links">
                {links?.map(({ url, text, image }, index) => (
                  <a
                    className="band__content__text__links__link"
                    href={url}
                    target="_blank"
                    key={index}
                  >
                    {image && (
                      <img
                        src={image}
                        className="band__content__text__links__link__image"
                      />
                    )}
                    <div className="band__content__text__links__link__text">
                      {text}
                    </div>
                  </a>
                ))}
              </div>
            </Band>
          );
        })}
      </div>
    </div>
  );
};
