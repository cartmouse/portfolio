import { ImageLinks } from "../Links/ImageLinks";
import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="about__body">
        <p>Hi, I'm Tom!</p>
        <p>
          I'm currently a Software Engineer at Ultraleap where I've primarily
          been working on TouchFree and TouchFree Web Tooling.
        </p>
        <p>
          Most of my experience lies in web tech, having become intimately
          familiar with TypeScript, ReactJS and NodeJS. But I'm always looking
          for ways to expand my knowledge and skills, more recently getting
          clued up on desktop app development using .NET with Avalonia and
          learning game development with Unity and Godot.
        </p>
        <ImageLinks />
      </div>
    </div>
  );
};
