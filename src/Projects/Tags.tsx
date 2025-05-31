import "./Tags.scss";

import { alterColor } from "@Utils";
import { Tag } from "./tagInfo";

export const Tags = ({ tags }: { tags?: Tag[] }) => {
  return (
    <div className="tags">
      {tags?.map(({ text, color }, j) => (
        <div
          className="tag"
          key={j}
          style={{
            background: `linear-gradient(to right, ${alterColor(
              color,
              1.1
            )}, ${color})`,
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
