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
  subtitle: string;
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
const electronTag: Tag = { text: "Electron", color: "#38a7c9" };

export const projectInfo: Project[] = [
  {
    id: "touchfree",
    title: "TOUCHFREE",
    subtitle: "ULTRALEAP",
    text: "An interaction engine and tooling libraries to enable touchless gesture control for kiosks and digital signage.",
    video: {
      type: "url",
      string: "https://www.youtube.com/embed/lcPMSjG6gD8?si=PYSS4F20KJ1a78qq",
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
    id: "madronzio",
    title: "MADRONZIO",
    subtitle: "ULTRALEAP",
    text: "A retail and brand exploration app, created as a demo for TouchFree. The high quality render animations were achieved by exporting frames of a video to PNGs, then rendering them in sequence to a canvas. This allowed for fine control over what frame was displayed at a given moment, giving a more engaging user experience.",
    tags: [tsTag, reactTag, tauriTag],
    video: { type: "file", string: Madronzio },
  },
  {
    id: "ballpit",
    title: "BALLPIT",
    subtitle: "ULTRALEAP",
    text: "3D interactable ballpit, created as a demo for TouchFree and designed for entertainment and brand engagement.",
    tags: [tsTag, reactTag, tauriTag, electronTag, threeJsTag],
    video: { type: "file", string: Ballpit },
  },
  {
    id: "storefront",
    title: "STOREFRONT",
    subtitle: "ULTRALEAP",
    text: "A quick service retail application, created as a demo for TouchFree. Demonstrates the use of touchless control for a kiosk in a retail environment, allowing for features such as hover states that wouldn't be possible with touchscreens.",
    tags: [tsTag, reactTag, tauriTag, electronTag],
    video: { type: "file", string: Storefront },
  },
  {
    id: "shooh",
    title: "SHOOH",
    subtitle: "ULTRALEAP",
    text: 'A product customisation application, created as a demo for TouchFree. Developing this app involved writing custom shaders to create the "scanner" and the colour customisation.',
    tags: [tsTag, reactTag, tauriTag, electronTag, threeJsTag],
    video: { type: "file", string: shOOH },
  },
  {
    id: "widgets",
    title: "WIDGETS",
    subtitle: "ULTRALEAP",
    text: "A selection of apps (and launcher) for gestural control of Windows and MacOS. Featuring actions such as: play/pause/skip media, navigate through presentation slides, point with a virtual laser, and controlling the cursor to click and scroll.",
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
    id: "buttons",
    title: "EVIE'S TALKING BUTTONS",
    subtitle: "PERSONAL",
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
