import "./Links.scss";
import { Link } from "@Projects";

interface LinksProps {
  projId?: string;
  links?: Link[];
}

export const Links = ({ projId, links }: LinksProps) => (
  <div className="links">
    {projId && (
      <a className="link" href={projId} target="_self" key={0}>
        <div className="text">Learn more</div>
      </a>
    )}
    {links &&
      links.map(({ url, text, image, alt }, i) => (
        <a className="link" href={url} target="_blank" key={i + 1}>
          {image && <img src={image} className="image" alt={alt} />}
          <div className="text">{text}</div>
        </a>
      ))}
  </div>
);
