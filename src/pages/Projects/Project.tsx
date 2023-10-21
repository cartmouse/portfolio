interface ProjectProps {
  title: string;
  desc: string;
  image: string;
  display: boolean;
  onClick: () => void;
}

export const Project = ({
  title,
  desc,
  image,
  display,
  onClick,
}: ProjectProps) => {
  return (
    <div className="project">
      <div className="project__title" onClick={onClick}>
        {title}
      </div>
      {display && (
        <div className="project__content">
          {desc}
          <img className="project__content__image" src={image}></img>
        </div>
      )}
    </div>
  );
};
