import "./Band.scss";

import { MutableRefObject, ReactNode } from "react";
import { alterColor } from "./Utils";
import { Video } from "./Components/Projects/ProjectInfo";

interface BandProps {
  color: string;
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
  double,
  video,
  circle,
}: BandProps) => {
  const imageVideo = () => {
    if (video) {
      return video.type === "url" ? (
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
      );
    }

    if (image) {
      return (
        <img
          className={`band__content__image ${
            circle && "band__content__image--circle"
          }`}
          src={image}
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

// const Image = ({ src, circle }: { src: string; circle?: boolean }) => {
//   return (
//     <img
//       className={`band__content__image ${
//         circle && "band__content__image--circle"
//       }`}
//       src={src}
//     />
//   );
// };
