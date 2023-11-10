import { Email, GitHub, LinkedIn } from "../../assets";
import "./ImageLinks.scss";

interface ImageLinkProps {
  href: string;
  image: string;
  altText: string;
}

export const ImageLink = ({ href, image, altText }: ImageLinkProps) => {
  return (
    <a className="image-links__link" href={href} target="_blank">
      <img src={image} alt={altText}></img>
    </a>
  );
};

export const ImageLinks = () => {
  return (
    <div className="image-links">
      <ImageLink
        href="https://github.com/cartmouse"
        image={GitHub}
        altText="github.com/cartmouse"
      />
      <ImageLink
        href="https://linkedin.com/in/tom-cartwright97"
        image={LinkedIn}
        altText="Tom Cartwright's LinkedIn"
      />
      <ImageLink
        href="mailto:tom-cartwright@outlook.com"
        image={Email}
        altText="email tom-cartwright@outlook.com"
      />
    </div>
  );
};
