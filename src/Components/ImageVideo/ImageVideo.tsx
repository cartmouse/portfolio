import "./ImageVideo.scss";

import { MutableRefObject, PropsWithChildren } from "react";
import { Image, Video } from "@Projects";

interface ImageVideoProps {
  onTouchEnd: () => void;
  vidRef?: MutableRefObject<HTMLVideoElement | null>;
  video?: Video;
  image?: Image;
  link?: string;
}

export const ImageVideo = ({
  video,
  image,
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
            title={image?.alt}
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
          title={image?.alt}
          ref={vidRef}
          onTouchEnd={onTouchEnd}
        >
          <source src={video.string} title={image?.alt} />
        </video>
      </Container>
    );
  }

  if (image) {
    return (
      <Container link={link}>
        <img className="image" src={image.src} alt={image?.alt} />
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
