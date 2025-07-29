import "./Media.scss";

import { MutableRefObject, PropsWithChildren } from "react";
import { Image, isImage, isVideo, Video } from "@Projects";

interface MediaProps {
  vidRef?: MutableRefObject<HTMLVideoElement | null>;
  src: Image | Video;
  link?: string;
}

export const Media = ({ src, vidRef, link }: MediaProps) => {
  if (isVideo(src)) {
    if (src.type === "youtube") {
      return (
        <Container link={link}>
          <iframe
            className="video url"
            src={src.src}
            allowFullScreen
            title={src.title}
          />
        </Container>
      );
    }

    return (
      <Container link={link}>
        <video
          className="video file"
          autoPlay
          loop
          title={src.title}
          ref={vidRef}
        >
          <source src={src.src} title={src.title} />
        </video>
      </Container>
    );
  }

  if (isImage(src)) {
    return (
      <Container link={link}>
        <img className="image" src={src.src} alt={src.alt} />
      </Container>
    );
  }
};

interface ContainerProps extends PropsWithChildren {
  link?: string;
}

const Container = ({ link, children }: ContainerProps) => {
  if (link) {
    return (
      <a className="media-container" href={link} target="_self">
        {children}
      </a>
    );
  }

  return <div className="media-container">{children}</div>;
};
