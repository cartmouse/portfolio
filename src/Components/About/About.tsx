import { ImageLinks } from "..";
import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="about__body">
        <p>Hi, I'm Tom!</p>
        <p>
          I'm currently a Developer at IVC Evidensia where I primarily work
          on the front end for a number of websites across the group.
        </p>
        <p>
          Most of my experience lies in web tech, having become intimately
          familiar with TypeScript, ReactJS and NodeJS. But I'm always looking
          for ways to expand my knowledge and skills, recently getting
          clued up on desktop app development using .NET with Avalonia and
          learning game development with Godot and Bevy.
        </p>
        <ImageLinks />
      </div>
    </div>
  );
};
