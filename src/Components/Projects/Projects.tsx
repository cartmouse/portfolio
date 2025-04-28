import { MutableRefObject } from "react";
import { Band } from "../../Band";
import "./Projects.scss";
import colors from "../../vars.module.scss";
import { infoMap, projectTypeTitles } from "./ProjectInfo";
import { alterColor } from "../../Utils";

interface ProjectsProps {
  url: string;
  bandRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export const Projects = ({ url, bandRefs }: ProjectsProps) => {
  return (
    <div className="projects">
      <div className="anchor anchor--no-gap" id="projects" />
      <div className="projects__titles">
        {Object.keys(projectTypeTitles).map((id) => {
          const name = projectTypeTitles[id];
          return (
            <a
              id={id}
              key={id}
              className={`projects__titles__title ${
                url.includes(id) && "projects__titles__title--selected"
              }`}
              href={`#projects/${id}`}
            >
              {name}
            </a>
          );
        })}
      </div>
      <div className="projects__display">
        {Object.keys(infoMap).map((type) => {
          return (
            <div key={type} className="projects__display__type">
              <div
                className="anchor anchor--single"
                id={`projects/${type}`}
                ref={(r) => bandRefs?.current.push(r)}
              />
              <h2 className="projects__display__title">
                {projectTypeTitles[type]}
              </h2>
              {infoMap[type].map(
                (
                  {
                    title,
                    subtitle,
                    text,
                    role,
                    image,
                    links,
                    video,
                    tags,
                    alt,
                  },
                  i
                ) => {
                  return (
                    <Band
                      color={i % 2 ? colors["indigoDye"] : colors["indigoDye2"]}
                      key={i}
                      double
                      image={image}
                      video={video}
                      alt={alt ?? ""}
                    >
                      <div className="band__content__text__title">
                        {title} |{" "}
                        <span className="band__content__text__subtitle">
                          {subtitle}
                        </span>
                      </div>

                      <div className="band__content__text__text">{text}</div>

                      {role ? (
                        <div>
                          <h4>Responsibilities</h4>
                          <div className="band__content__text__text">
                            {role}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}

                      <div className="band__content__text__tags">
                        {tags?.map(({ text, color }, j) => (
                          <div
                            className="band__content__text__tags__tag"
                            key={j}
                            style={{
                              background: `linear-gradient(to right, ${alterColor(
                                color,
                                1.1
                              )}, ${color})`,
                            }}
                          >
                            {text}
                          </div>
                        ))}
                      </div>

                      <div className="band__content__text__links">
                        {links?.map(({ url, text, image, alt }, j) => (
                          <a
                            className="band__content__text__links__link"
                            href={url}
                            target="_blank"
                            key={j}
                          >
                            {image && (
                              <img
                                src={image}
                                className="band__content__text__links__link__image"
                                alt={alt}
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
                }
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
