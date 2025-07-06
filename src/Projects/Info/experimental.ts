import { GitHubLight } from "@Assets";
import { cTag, godotTag, ProjectCategory } from "@Projects";
import { asset } from "@Utils";

export const experimental: ProjectCategory = {
  title: "Experimental",
  anchor: "experimental",
  projects: [
    {
      id: "renderer",
      title: "3D Renderer",
      subtitle: "Personal",
      desc: "Software based 3D object renderer",
      text: 'Following the "3D Graphics Programming from Scratch" course from Pikuma.',
      tags: [cTag],
      image: asset("renderer.jpg"),
      video: { type: "file", string: asset("renderer.mp4") },
    },
    {
      id: "grass",
      title: "Grass Shader",
      subtitle: "Personal",
      desc: "Shell texture shader for emulating grass swaying in the wind",
      text: "Based around an implemenation of a fur shader by Acerola, then adapted to appear like blades of grass swaying in the wind.",
      tags: [godotTag],
      image: asset("grass.jpg"),
      video: { type: "file", string: asset("grass.mp4") },
      links: [
        {
          url: "https://github.com/cartmouse/gd-shell-texture",
          text: "GitHub",
          image: GitHubLight,
          alt: "Repository for shell texture experiment",
        },
      ],
    },
  ],
};
