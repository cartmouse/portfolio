import "./Band.scss";

import { ReactNode } from "react";

interface BandProps {
  color: string;
  index: number;
  id?: string;
  double?: boolean;
  children?: ReactNode;
  image?: string;
}

export const Band = ({
  color,
  image,
  id,
  children,
  index,
  double,
}: BandProps) => {
  return (
    <div
      className="band"
      style={{
        background: `linear-gradient(to right, ${color}, ${color})`,
      }}
    >
      <div
        className={`anchor ${double ? "anchor--double" : "anchor--single"}`}
        id={id}
      />
      <div className="band__content">
        {index % 2 ? (
          <>
            <img className="band__content__image" src={image} />
            <div className="band__content__text">{children}</div>
          </>
        ) : (
          <>
            <div className="band__content__text">{children}</div>
            <img className="band__content__image" src={image} />
          </>
        )}
      </div>
    </div>
  );
};
