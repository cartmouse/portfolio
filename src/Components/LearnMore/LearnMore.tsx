import { Footer } from "../Footer/Footer";
import { ImageVideo } from "../ImageVideo/ImageVideo";
import "./LearnMore.scss";
import { Tags, Project, Links } from "@Projects";
import { useNavigate } from "react-router-dom";

interface LearnMoreProps {
  info: Project;
}

export const LearnMore = ({ info }: LearnMoreProps) => {
  const nav = useNavigate();

  return (
    <div className="learn-more-container">
      <nav className="navbar">
        <button className="nav-item" onClick={() => nav(-1)}>
          Back
        </button>
      </nav>
      <div className="content">
        <div className="header">
          <h1 className="title">{info.title}</h1>
          <h2 className="subtitle">{info.subtitle}</h2>
        </div>
        {info.video ? (
          <ImageVideo onTouchEnd={() => {}} video={info.video} alt={info.alt} />
        ) : (
          <ImageVideo onTouchEnd={() => {}} image={info.image} alt={info.alt} />
        )}
        {}
        <Tags tags={info.tags} />
        <p className="text">{info.text}</p>
        <Links links={info.links} />
      </div>
      <Footer altBackground />
    </div>
  );
};
