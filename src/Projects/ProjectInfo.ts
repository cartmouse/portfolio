import { interactive, practical, experimental } from "./Info";
import { Tag } from "./tagInfo";

export interface Link {
  url: string;
  text: string;
  image?: string;
  alt?: string;
}

export interface Video {
  type: "url" | "file";
  string: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  text?: string;
  alt?: string;
  image?: string;
  video?: Video;
  links?: Link[];
  tags?: Tag[];
}

export interface ProjectCategory {
  title: string;
  anchor: string;
  projects: Project[];
}

export const infoMap: ProjectCategory[] = [
  interactive,
  practical,
  experimental,
];
