import "./Footer.scss";

import { ImageLinks } from "@Components";

export const Footer = ({ altBackground }: { altBackground?: boolean }) => {
  return (
    <div className={`footer ${altBackground ? "alt-background" : ""}`}>
      <div>
        <div className="copyright">© Tom Cartwright 2025</div>
        <div className="attr">
          Favicon by{" "}
          <a
            href="https://dribbble.com/limastd?ref=svgrepo.com"
            target="_blank"
          >
            Lima Studio
          </a>{" "}
          in CC Attribution License via{" "}
          <a href="https://www.svgrepo.com/" target="_blank">
            SVG Repo
          </a>
        </div>
      </div>
      <ImageLinks />
    </div>
  );
};
