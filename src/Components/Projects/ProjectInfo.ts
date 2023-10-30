import { EviesButtons, GitHub } from "../../assets";

interface Link {
  url: string;
  text: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  text: string;
  image?: string;
  video?: string;
  links?: Link[];
}

export const projectInfo: Project[] = [
  {
    id: "buttons",
    title: "EVIE'S TALKING BUTTONS",
    text: "An aid for people who sometimes prefer to remain non-verbal. Customisable buttons that use the device's text-to-speech engine to say the words aloud.",
    image: EviesButtons,
    links: [
      { url: "https://eviesbuttons.netlify.app", text: "VISIT SITE" },
      {
        url: "https://github.com/cartmouse/evies-talking-buttons",
        text: "GITHUB",
        image: GitHub,
      },
    ],
  },
  {
    id: "touchfree",
    title: "TOUCHFREE",
    text: "An engine for mid-air interaction and tooling library for web application development.",
    video:
      "https://www.youtube-nocookie.com/embed/JEjXetjbMU8?si=1BfAXW3fxntYkewU",
    links: [
      {
        url: "https://www.ultraleap.com/enterprise/touchless-experiences/touchfree-solution/",
        text: "LEARN MORE",
      },
      {
        url: "https://github.com/ultraleap/TouchFree",
        text: "TOUCHFREE",
        image: GitHub,
      },
      {
        url: "https://github.com/ultraleap/TouchFreeWebTooling",
        text: "WEB TOOLING",
        image: GitHub,
      },
    ],
  },
  {
    id: "widgets",
    title: "ULTRALEAP WIDGETS",
    text: "A selection of apps (and launcher) for gestural control of Windows and MacOS. Featuring actions such as: play/pause/skip music, navigate through presentation slides, point with a virtual laser, and controlling the cursor to click and scroll.",
    image: EviesButtons,
    links: [
      {
        url: "https://leap2.ultraleap.com/ultraleap-widgets/",
        text: "LEARN MORE",
      },
    ],
  },
  {
    id: "ballpit",
    title: "BALLPIT",
    text: "3D interactable ballpit, created as a demo for TouchFree.",
    image: EviesButtons,
  },
  {
    id: "storefront",
    title: "STOREFRONT",
    text: "A quick service retail application, created as a demo for TouchFree.",
    image: EviesButtons,
  },
  {
    id: "madronzio",
    title: "MADRONZIO",
    text: "A retail and brand exploration demo, created as a demo for TouchFree.",
    image: EviesButtons,
  },
  {
    id: "shooh",
    title: "SHOOH",
    text: "A product customisation application, created as a demo for TouchFree.",
    image: EviesButtons,
  },
  {
    id: "tapa-tapa-tapa",
    title: "TAPA-TAPA-TAPA",
    text: "A multi-tap delay DAW plugin written in C++ using the JUCE framework.",
    links: [
      {
        url: "https://github.com/cartmouse/Tapa-Tapa-Tapa",
        text: "GITHUB",
        image: GitHub,
      },
    ],
  },
];
