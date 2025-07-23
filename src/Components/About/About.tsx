import "./About.scss";
import { ImageLinks } from "@Components";
import { useScrollTrigger } from "@Utils";

export const About = () => {
  const refs = useScrollTrigger();

  return (
    <div className="about">
      <div className="body" ref={(r) => r && refs.current.push(r)}>
        <p>Hi, I'm Tom!</p>
        <p>
          I've been creating engaging applications for over five years, driven
          by a love of using technology to craft experiences that enhance
          people's lives.
        </p>
        <p>
          My career has spanned a variety of industries: audio equipment,
          spatial interactions, web development, and robotics. Paired with a
          background in audio tech from my BSc. in Music and Sound Recording
          (Tonmeister), I've gained a unique perspective on how people engage
          with technology, helping me create meaningful and practical
          applications that help and delight their users.
        </p>
        <p>
          Currently, I'm combining my passions for video games, music, and
          software with game development, graphics, and audio programming.
        </p>
        <ImageLinks />
      </div>
    </div>
  );
};
