import { ImageLinks } from "..";
import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="about__body">
        <p>Hi, I'm Tom!</p>
        <p>
          I'm currently a Software Engineer at Loop Technology where I use a
          range of technologies to create everything from human machine
          interfaces to robot programs.
        </p>
        <p>
          Most of my experience lies in web tech, having become intimately
          familiar with JavaScript, TypeScript, ReactJS, CSS/SASS, NodeJS and
          C#/.NET. I'm always looking for ways to expand my knowledge and
          skills, having explored desktop app development using Avalonia;
          robotics and automation with Beckhoff's TwinCAT system; and game
          development with Godot and Bevy.
        </p>
        <ImageLinks />
      </div>
    </div>
  );
};
