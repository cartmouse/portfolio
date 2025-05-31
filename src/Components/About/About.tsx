import "./About.scss";
import { ImageLinks } from "@Components";
import { asset, useScrollTrigger } from "@Utils";

export const About = () => {
  const refs = useScrollTrigger();

  return (
    <div className="about">
      <div className="profile-container" ref={(r) => r && refs.current.push(r)}>
        <img className="profile" src={asset("profile.jpg")} />
      </div>

      <div className="body" ref={(r) => r && refs.current.push(r)}>
        <p>Hi, I'm Tom!</p>
        <p>
          I've been creating engaging applications for over five years, driven
          by a love of using technology to craft experiences that enhance
          people's lives.
        </p>
        <p>
          My background in the audio tech world, with a BSc in Music and Sound
          Recording (Tonmeister), combined with my varied experience in various
          industries (audio equipment, spatial interactions, web development,
          robotics) has given me unique insight into how people engage and
          interact with products and experiences.
        </p>
        <p>
          Currently, I'm combining my passions for video games, music, and
          software to dive into game development, graphics, and audio
          programming.
        </p>
        <ImageLinks />
      </div>
    </div>
  );
};
