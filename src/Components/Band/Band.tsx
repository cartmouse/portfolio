import "./Band.scss";

import { useScrollTrigger } from "@Utils";
import { Project } from "@Projects";
import { Media, LinkButton } from "@Components";

interface BandProps {
  info: Project;
  index: number;
}

export const Band = ({
  info: { thumbnail, media, title, subtitle, desc, id },
  index,
}: BandProps) => {
  const addRefs = useScrollTrigger();

  return (
    <div className="band" ref={addRefs}>
      {media && <Media src={thumbnail} link={`/projects/${id}`} />}
      <div className={`description  ${index % 2 !== 0 && "reverse"}`}>
        <div className="title-container">
          <div className="title">
            {title} | <span className="subtitle">{subtitle}</span>
          </div>
        </div>
        <p className="desc">{desc}</p>
        <LinkButton
          link={{ url: `/projects/${id}`, text: "Learn More" }}
          target="_self"
        />
      </div>
    </div>
  );
};
