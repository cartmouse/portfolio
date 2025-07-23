import { BackButton } from "../BackButton/BackButton";
import { Band } from "../Band/Band";
import { Footer } from "../Footer/Footer";
import "./MoreProjects.scss";
import { ProjectCategory } from "@Projects";

export const MoreProjects = ({
  category: { projects, title, description },
}: {
  category: ProjectCategory;
}) => {
  return (
    <div className="more-container">
      <nav className="navbar">
        <BackButton />
      </nav>
      <div className="header">
        <h1 className="title">{title}</h1>
        <p className="cat-desc">{description}</p>
      </div>
      <div className="content">
        {projects.map((info, i) => (
          <Band key={i} info={info} index={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
