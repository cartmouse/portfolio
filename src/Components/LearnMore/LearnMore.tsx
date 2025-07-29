import "./LearnMore.scss";

import { Footer } from "../Footer/Footer";
import { Media } from "../Media/Media";
import { LinkButton } from "../LinkButton/LinkButton";
import { Tags, Project } from "@Projects";
import { BackButton } from "../BackButton/BackButton";

interface LearnMoreProps {
  info: Project;
}

export const LearnMore = ({ info }: LearnMoreProps) => {
  return (
    <div className="learn-more-container">
      <nav className="navbar">
        <BackButton />
      </nav>
      <div className="content">
        <div className="header">
          <h1 className="title">{info.title}</h1>
          <h2 className="subtitle">{info.subtitle}</h2>
          <p className="desc">{info.desc}</p>
        </div>
        <div className="more-images">
          {info.media?.map((media, i) => <Media src={media} key={i + 1} />)}
        </div>
        <Tags tags={info.tags} />
        <p className="text">{info.text}</p>
        <div className="links">
          {info.links &&
            info.links.map((link, i) => <LinkButton link={link} key={i + 1} />)}
        </div>
      </div>
      <Footer altBackground />
    </div>
  );
};
