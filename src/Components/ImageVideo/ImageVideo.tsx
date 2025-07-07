import "./ImageVideo.scss";

import { MutableRefObject, PropsWithChildren } from "react";
import { Video } from "@Projects";

interface ImageVideoProps {
  onTouchEnd: () => void;
  vidRef?: MutableRefObject<HTMLVideoElement | null>;
  video?: Video;
  image?: string;
  alt?: string;
  link?: string;
}

export const ImageVideo = ({
  video,
  image,
  alt,
  vidRef,
  onTouchEnd,
  link,
}: ImageVideoProps) => {
  if (video) {
    if (video.type === "url") {
      return (
        <Container link={link}>
          <iframe
            className="video url"
            src={video.string}
            allowFullScreen
            title={alt}
          />
        </Container>
      );
    }

    return (
      <Container link={link}>
        <video
          className="video file"
          controls
          autoPlay
          loop
          title={alt}
          ref={vidRef}
          onTouchEnd={onTouchEnd}
        >
          <source src={video.string} title={alt} />
        </video>
      </Container>
    );
  }

  if (image) {
    return (
      <Container link={link}>
        <img className="image" src={image} alt={alt} />
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
