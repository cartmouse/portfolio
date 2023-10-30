import { MutableRefObject } from "react";
import { Band } from "../../Band";
import { EviesButtons } from "../../assets";
import "./Projects.scss";

interface ProjectInfo {
  id: string;
  title: string;
  text: string;
  image?: string;
  link?: string;
}

const projects: ProjectInfo[] = [
  {
    id: "buttons",
    title: "EVIE'S TALKING BUTTONS",
    text: "An aid for people who sometimes prefer to remain non-verbal. Customisable buttons that use the device's text-to-speech engine to say the words aloud.",
    image: EviesButtons,
    link: "https://eviesbuttons.netlify.app",
  },
  {
    id: "touchfree",
    title: "TOUCHFREE",
    text: "An engine for mid-air interaction and tooling library for web application development",
    image: EviesButtons,
  },
  {
    id: "ballpit",
    title: "BALLPIT",
    text: "3D interactable ballpit, created as a demo for TouchFree.",
    image: EviesButtons,
  },
  {
    id: "storefront",
    title: "STOREFRONT",
    text: "A quick service retail application, created as a demo for TouchFree.",
    image: EviesButtons,
  },
  {
    id: "madronzio",
    title: "MADRONZIO",
    text: "A retail and brand exploration demo, created as a demo for TouchFree.",
    image: EviesButtons,
  },
  {
    id: "shooh",
    title: "SHOOH",
    text: "A product customisation application, created as a demo for TouchFree.",
    image: EviesButtons,
  },
];

interface ProjectsProps {
  url: string;
  bandRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export const Projects = ({ url, bandRefs }: ProjectsProps) => {
  return (
    <div className="projects">
      <div className="anchor anchor--single" id="projects" />
      <div className="projects__titles">
        {projects.map(({ title, id }, index) => {
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
        {projects.map(({ title, text, image, id, link }, index) => {
          return (
            <Band
              color="#2a6f97"
              index={index}
              key={index}
              id={`projects/${id}`}
              double
              image={image}
              bandRefs={bandRefs}
            >
              <>
                <div className="band__content__text__title">{title}</div>
                <div className="band__content__text__text">{text}</div>
                <a
                  className="band__content__text__link"
                  href={link}
                  target="_blank"
                >
                  {link}
                </a>
              </>
            </Band>
          );
        })}
      </div>
    </div>
  );
};
