import "./Band.scss";

import { MutableRefObject, ReactNode } from "react";
import { alterColor } from "./Utils";
import { Video } from "./Components/Projects/ProjectInfo";

interface BandProps {
  color: string;
  index: number;
  bandRefs: MutableRefObject<(HTMLDivElement | null)[]>;
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
  id,
  children,
  index,
  double,
  video,
  circle,
}: BandProps) => {
  const textLeft = index % 2 === 0;

  const imVid = video ? (
    video.type === "url" ? (
      <iframe
        className="band__content__video band__content__video--url"
        src={video.string}
        allowFullScreen
      />
    ) : (
      <video
        className="band__content__video band__content__video--file"
        controls
      >
        <source src={video.string} />
      </video>
    )
  ) : (
    <img
      className={`band__content__image ${
        circle && "band__content__image--circle"
      }
        ${textLeft && "band__content__image"}
      }`}
      src={image}
    />
  );

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
      <div className="band__content">
        <>
          {imVid}
          <div
            className={`band__content__text ${
              textLeft && "band__content__text"
            }`}
          >
            {children}
          </div>
        </>
      </div>
    </div>
  );
};
