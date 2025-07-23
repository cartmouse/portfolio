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

export interface Image {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  text?: string;
  alt?: string;
  images?: Image[];
  video?: Video;
  links?: Link[];
  tags?: Tag[];
}

export interface ProjectCategory {
  title: string;
  anchor: string;
  description: string;
  projects: Project[];
}

export const infoMap: ProjectCategory[] = [
  interactive,
  practical,
  experimental,
];
