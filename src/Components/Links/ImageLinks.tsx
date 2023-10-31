import { Email, GitHub, LinkedIn } from "../../assets";
import "./ImageLinks.scss";

interface ImageLinkProps {
  href: string;
  image: string;
}

export const ImageLink = ({ href, image }: ImageLinkProps) => {
  return (
    <a className="image-links__link" href={href} target="_blank">
      <img src={image}></img>
    </a>
  );
};

export const ImageLinks = () => {
  return (
    <div className="image-links">
      <ImageLink href="https://github.com/cartmouse" image={GitHub} />
      <ImageLink
        href="https://linkedin.com/in/tom-cartwright97"
        image={LinkedIn}
      />
      <ImageLink href="mailto:tom-cartwright@outlook.com" image={Email} />
    </div>
  );
};
