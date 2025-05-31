import "./ImageVideo.scss";

import { MutableRefObject } from "react";
import { Video } from "@Projects";

interface ImageVideoProps {
  onTouchEnd: () => void;
  vidRef?: MutableRefObject<HTMLVideoElement | null>;
  video?: Video;
  image?: string;
  alt?: string;
}

export const ImageVideo = ({
  video,
  image,
  alt,
  vidRef,
  onTouchEnd,
}: ImageVideoProps) => {
  if (video) {
    if (video.type === "url") {
      return (
        <div className="media-container">
          <iframe
            className="video url"
            src={video.string}
            allowFullScreen
            title={alt}
          />
        </div>
      );
    }

    return (
      <div className="media-container">
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
      </div>
    );
  }

  if (image) {
    return (
      <div className="media-container">
        <img className="image" src={image} alt={alt} />
      </div>
    );
  }
};
