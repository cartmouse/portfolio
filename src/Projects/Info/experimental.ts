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
      text: `Following the "3D Graphics Programming from Scratch" course from Pikuma, I've been writing a software based 3D object renderer using C and SDL with no dedicated graphics libraries.
      
      This has given me a much stronger understanding of the graphics rendering process as there is little to no abstraction and everything has to be implemented manually.`,
      tags: [cTag],
      image: asset("renderer.jpg"),
      video: { type: "file", string: asset("renderer.mp4") },
      links: [
        {
          url: "https://github.com/cartmouse/3dRenderer",
          text: "GitHub",
          image: GitHubLight,
          alt: "Repository for 3D renderer project",
        },
        {
          url: "https://pikuma.com/courses/learn-3d-computer-graphics-programming",
          text: "Course Website",
        },
      ],
    },
    {
      id: "grass",
      title: "Grass Shader",
      subtitle: "Personal",
      desc: "Shell texture shader for emulating grass swaying in the wind",
      text: `This project began by with inspiration from an implemenation of a shell texture shader intended to emulate fur/hair by Acerola. I took the idea and implemented it in Godot, then adapted it to appear like blades of grass and added logic to make them sway as if blown by a breeze.
      
      This was a great hands on way to explore a new rendering process and expand my knowledge of shaders.`,
      tags: [godotTag],
      image: asset("grass.jpg"),
      video: { type: "file", string: asset("grass.mp4") },
      links: [
        {
          url: "https://github.com/GarrettGunnell/Shell-Texturing",
          text: "Acerola's Original Project",
        },
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
