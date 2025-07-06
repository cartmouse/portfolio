import "./Tags.scss";

import { alterColor } from "@Utils";
import { Tag } from "./tagInfo";

export const Tags = ({ tags }: { tags?: Tag[] }) => {
  return (
    <div className="tags">
      {tags?.map(({ text, color, textColor }, j) => (
        <div
          className="tag"
          key={j}
          style={{
            color: textColor || "#1f2421",
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
