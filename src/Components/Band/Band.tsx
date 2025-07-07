import "./Band.scss";

import { useRef } from "react";
import { useScrollTrigger } from "@Utils";
import { Project } from "@Projects";
import { ImageVideo } from "@Components";
import { LinkButton } from "../LinkButton/LinkButton";

interface BandProps {
  info: Project;
  index: number;
}

export const Band = ({
  info: { alt, image, title, subtitle, desc, id },
  index,
}: BandProps) => {
  const fadeRefs = useScrollTrigger();
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const onScroll = () => {
    if (!vidRef.current) return;
    const top = vidRef.current.getBoundingClientRect().top;
    if (top > window.innerHeight || top < 0) {
      vidRef.current.pause();
      vidRef.current.currentTime = 0;
    }
  };
  window.addEventListener("scroll", onScroll);

  const isVideoPlaying = () => {
    const hasPlayed = vidRef.current?.played.length
      ? vidRef.current?.played.length > 0
      : false;

    if (!hasPlayed) return false;

    return (
      vidRef.current?.currentTime !== 0 &&
      !vidRef.current?.paused &&
      !vidRef.current?.ended
    );
  };

  const playVideo = () => vidRef.current?.play();
  const pauseVideo = () => vidRef.current?.pause();
  const toggleVideoPlaying = () =>
    isVideoPlaying() ? pauseVideo() : playVideo();

  return (
    <div
      className="band"
      ref={(r) => r && fadeRefs.current.push(r)}
      onMouseEnter={() => playVideo()}
      onMouseLeave={() => pauseVideo()}
    >
      {image && (
        <ImageVideo
          alt={alt}
          onTouchEnd={toggleVideoPlaying}
          vidRef={vidRef}
          image={image}
          link={`/${id}`}
        />
      )}
      <div className={`description  ${index % 2 !== 0 && "reverse"}`}>
        <div className="title-container">
          <div className="title">
            {title} | <span className="subtitle">{subtitle}</span>
          </div>
        </div>
        <p className="desc">{desc}</p>
        <LinkButton link={{ url: id, text: "Learn More" }} target="_self" />
      </div>
    </div>
  );
};
