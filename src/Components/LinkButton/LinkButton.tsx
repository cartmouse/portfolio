import "./LinkButton.scss";
import { Link } from "@Projects";

interface LinkButtonProps {
  link: Link;
  target?: "_blank" | "_self";
}

export const LinkButton = ({
  link: { url, image, alt, text },
  target = "_blank",
}: LinkButtonProps) => {
  return (
    <a className="link-button" href={url} target={target}>
      {image && <img src={image} className="image" alt={alt} />}
      <div className="text">{text}</div>
    </a>
  );
};
