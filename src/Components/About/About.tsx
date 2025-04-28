import { ImageLinks } from "..";
import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="about__body">
        <p>Hi, I'm Tom!</p>
        <p>
          I'm a Software Engineer with 5 years of experience creating engaging,
          efficient and user-centric applications.
        </p>
        <p>
          Most of my experience lies in and around the web, having become
          intimately familiar with TypeScript, JavaScript, ReactJS, CSS/SASS and
          C#/.NET. I'm always looking for ways to expand my knowledge and
          skills, having explored desktop app development using Avalonia;
          robotics and automation with Beckhoff's TwinCAT system; and created
          audio and graphics software with C/C++.
        </p>
        <p>
          I'm currently on a game development journey, primarily using Godot and
          Bevy.
        </p>
        <ImageLinks />
      </div>
    </div>
  );
};
