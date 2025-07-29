import { interactive, practical, experimental } from "./Info";
import { Tag } from "./tagInfo";

export interface Link {
  url: string;
  text: string;
  image?: string;
  alt?: string;
}

export interface Video {
  type: "youtube" | "url";
  src: string;
  title: string;
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
  thumbnail: Image;
  media: (Image | Video)[];
  text: string;
  links?: Link[];
  tags?: Tag[];
}

export function isVideo(media: Image | Video): media is Video {
  return (
    (media as Video).type !== undefined &&
    ((media as Video).type === "url" || (media as Video).type === "youtube") &&
    (media as Video).src !== undefined
  );
}

export function isImage(media: Image | Video): media is Image {
  return (
    (media as Image).src !== undefined && (media as Image).alt !== undefined
  );
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
