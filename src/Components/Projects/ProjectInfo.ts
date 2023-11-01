import {
  Ballpit,
  EviesButtons,
  GitHub,
  Madronzio,
  Storefront,
  Widgets,
  shOOH,
} from "../../assets";

interface Link {
  url: string;
  text: string;
  image?: string;
}

interface Tag {
  text: string;
  color: string;
}

export interface Video {
  type: "url" | "file";
  string: string;
}

export interface Project {
  id: string;
  title: string;
  text: string;
  image?: string;
  video?: Video;
  links?: Link[];
  tags?: Tag[];
}

const reactTag: Tag = { text: "ReactJS", color: "#149eca" };
const tsTag: Tag = { text: "TypeScript", color: "#2b7cd0" };
const dotnetTag: Tag = { text: ".NET", color: "#4c25d2" };
const tauriTag: Tag = { text: "Tauri", color: "#999922" };
// const cppTag: Tag = { text: "C++", color: "#6d9cd5" };
const threeJsTag: Tag = { text: "three.js", color: "#009ef4" };

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
    tags: [tsTag, { text: "Preact", color: "#673ab8" }],
  },
  {
    id: "touchfree",
    title: "TOUCHFREE",
    text: "An interaction engine and tooling libraries to enable touchless gesture control for kiosks and digital signage.",
    video: {
      type: "url",
      string:
        "https://www.youtube-nocookie.com/embed/JEjXetjbMU8?si=1BfAXW3fxntYkewU",
    },
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
    tags: [tsTag, reactTag, dotnetTag],
  },
  {
    id: "widgets",
    title: "ULTRALEAP WIDGETS",
    text: "A selection of apps (and launcher) for gestural control of Windows and MacOS. Featuring actions such as: play/pause/skip music, navigate through presentation slides, point with a virtual laser, and controlling the cursor to click and scroll.",
    image: Widgets,
    links: [
      {
        url: "https://leap2.ultraleap.com/ultraleap-widgets/",
        text: "LEARN MORE",
      },
    ],
    tags: [dotnetTag, { text: "Avalonia", color: "#8b44ac" }],
  },
  {
    id: "madronzio",
    title: "MADRONZIO",
    text: "A retail and brand exploration demo, created as a demo for TouchFree. The high quality render animations were achieved by exporting frames of a video to PNGs, then rendering them in sequence to a canvas. This allowed for fine control over what frame was displayed at a given moment, giving a more engaging user experience.",
    tags: [tsTag, reactTag, tauriTag],
    video: { type: "file", string: Madronzio },
  },
  {
    id: "ballpit",
    title: "BALLPIT",
    text: "3D interactable ballpit, created as a demo for TouchFree.",
    tags: [tsTag, reactTag, tauriTag, threeJsTag],
    video: { type: "file", string: Ballpit },
  },
  {
    id: "storefront",
    title: "STOREFRONT",
    text: "A quick service retail application, created as a demo for TouchFree. Demonstrated how the use of touchless control in a kiosk environment",
    tags: [tsTag, reactTag, tauriTag],
    video: { type: "file", string: Storefront },
  },
  {
    id: "shooh",
    title: "SHOOH",
    text: "A product customisation application, created as a demo for TouchFree.",
    tags: [tsTag, reactTag, tauriTag, threeJsTag],
    video: { type: "file", string: shOOH },
  },
  // {
  //   id: "tapa-tapa-tapa",
  //   title: "TAPA-TAPA-TAPA",
  //   text: "A multi-tap delay DAW plugin. Originally made as coursework for my degree.",
  //   links: [
  //     {
  //       url: "https://github.com/cartmouse/Tapa-Tapa-Tapa",
  //       text: "GITHUB",
  //       image: GitHub,
  //     },
  //   ],
  //   tags: [cppTag, { text: "JUCE", color: "#f38d48" }],
  // },
];
