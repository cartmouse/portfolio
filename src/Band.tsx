import "./Band.scss";

import { MutableRefObject, ReactNode } from "react";
import { alterColor } from "./Utils";
import { Video } from "./Components/Projects/ProjectInfo";

interface BandProps {
  color: string;
  bandRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  alt?: string;
  id?: string;
  double?: boolean;
  children?: ReactNode;
  image?: string;
  circle?: boolean;
  video?: Video;
}

export const Band = ({
  color,
  image,
  bandRefs,
  alt,
  id,
  children,
  double,
  video,
  circle,
}: BandProps) => {
  const imageVideo = () => {
    if (video) {
      if (video.type === "url") {
        return (
          <iframe
            className="band__content__video band__content__video--url"
            src={video.string}
            allowFullScreen
            title={alt}
          />
        );
      }

      return (
        <video
          className="band__content__video band__content__video--file"
          controls
          title={alt}
        >
          <source src={video.string} title={alt} />
        </video>
      );
    }

    if (image) {
      return (
        <img
          className={`band__content__image ${
            circle ? "band__content__image--circle" : ""
          }`}
          src={image}
          alt={alt}
        />
      );
    }

    return <></>;
  };

  return (
    <div
      className="band"
      style={{
        background: `linear-gradient(to right, ${alterColor(
          color,
          1.1
        )}, ${color})`,
      }}
    >
      <div
        className={`anchor ${double ? "anchor--double" : "anchor--single"}`}
        id={id}
        ref={(r) => bandRefs?.current.push(r)}
      />
      <div
        className={`band__content ${
          !image && !video ? "band__content--text" : ""
        }`}
      >
        <>
          {imageVideo()}
          <div className="band__content__text">{children}</div>
        </>
      </div>
    </div>
  );
};
