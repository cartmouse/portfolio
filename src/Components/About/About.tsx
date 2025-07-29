import "./About.scss";
import { ImageLinks } from "@Components";
import { useScrollTrigger } from "@Utils";

export const About = () => {
  const addRefs = useScrollTrigger();

  return (
    <div className="about">
      <div className="body" ref={addRefs}>
        <p>Hi, I'm Tom!</p>
        <p>
          I've been creating engaging applications and experiences designed to
          enhance the lives of their users for over five years.
        </p>
        <p>
          My career has spanned a variety of industries: audio equipment,
          spatial interactions, web development, and robotics. This, paired with
          my Music and Sound Recording (Tonmeister) degree, has given me a
          unique perspective into how people engage with technology - helping me
          craft meaningful experiences.
        </p>
        <p>
          Currently, I'm exploring my passion for video games, music, and
          software through game development, graphics, and audio programming.
        </p>
        <ImageLinks />
      </div>
    </div>
  );
};
