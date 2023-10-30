import "./Band.scss";

import { MutableRefObject, ReactNode } from "react";

interface BandProps {
  color: string;
  index: number;
  bandRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  id?: string;
  double?: boolean;
  children?: ReactNode;
  image?: string;
}

export const Band = ({
  color,
  image,
  bandRefs,
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
        ref={(r) => bandRefs?.current.push(r)}
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
