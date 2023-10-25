import "./Band.scss";

import { ReactNode } from "react";

interface BandProps {
  color: string;
  index: number;
  id?: string;
  children?: ReactNode;
  image?: string;
}

export const Band = ({ color, image, id, children, index }: BandProps) => {
  return (
    <div
      id={id}
      className="band"
      style={{
        background: `linear-gradient(to right, ${color}, ${color})`,
      }}
    >
      {index % 2 ? (
        <>
          <img className="band__image" src={image} />
          <div className="band__content">{children}</div>
        </>
      ) : (
        <>
          <div className="band__content">{children}</div>
          <img className="band__image" src={image} />
        </>
      )}
    </div>
  );
};
