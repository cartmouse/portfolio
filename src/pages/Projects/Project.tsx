interface ProjectProps {
  title: string;
  onClick: () => void;
}

export const Project = ({ title, onClick }: ProjectProps) => {
  return (
    <div className="project">
      <div className="project__title" onClick={onClick}>
        {title}
      </div>
    </div>
  );
};
