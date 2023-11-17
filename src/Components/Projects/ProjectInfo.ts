import {
  Ballpit,
  EviesButtons,
  GitHub,
  Madronzio,
  Storefront,
  Tapa,
  Widgets,
  shOOH,
} from "../../assets";

interface Link {
  url: string;
  text: string;
  image?: string;
  alt?: string;
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
  alt?: string;
  image?: string;
  video?: Video;
  links?: Link[];
  tags?: Tag[];
}

const reactTag: Tag = { text: "ReactJS", color: "#24aeda" };
const tsTag: Tag = { text: "TypeScript", color: "#4b9cf0" };
const dotnetTag: Tag = { text: ".NET", color: "#8c65f2" };
const tauriTag: Tag = { text: "Tauri", color: "#a9a932" };
const cppTag: Tag = { text: "C++", color: "#6d9cd5" };
const threeJsTag: Tag = { text: "three.js", color: "#10aef4" };
const electronTag: Tag = { text: "Electron", color: "#48b7d9" };

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
    alt: "Embedded YouTube video demonstrating the use of the TouchFree mid-air interaction software.",
    links: [
      {
        url: "https://www.ultraleap.com/enterprise/touchless-experiences/touchfree-solution/",
        text: "LEARN MORE",
      },
      {
        url: "https://github.com/ultraleap/TouchFree",
        text: "TOUCHFREE",
        image: GitHub,
        alt: "Repository for TouchFree",
      },
      {
        url: "https://github.com/ultraleap/TouchFreeWebTooling",
        text: "WEB TOOLING",
        image: GitHub,
        alt: "Repository for TouchFree Web Tooling",
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
    alt: "A kiosk with a retail application being used. Showing the inner mechanics of a watch being explored.",
  },
  {
    id: "ballpit",
    title: "BALLPIT",
    subtitle: "ULTRALEAP",
    text: "3D interactable ballpit, created as a demo for TouchFree and designed for entertainment and brand engagement.",
    tags: [tsTag, reactTag, tauriTag, electronTag, threeJsTag],
    video: { type: "file", string: Ballpit },
    alt: 'A kiosk with a brand experience application being used. The user is prompted to "clear the balls" then balls enter the screen, the user moves them around, emptying the pit. A message reading "TouchFree is engaging" is displayed under the balls.',
  },
  {
    id: "storefront",
    title: "STOREFRONT",
    subtitle: "ULTRALEAP",
    text: "A quick service retail application, created as a demo for TouchFree. Demonstrates the use of touchless control for a kiosk in a retail environment, allowing for features such as hover states that wouldn't be possible with touchscreens.",
    tags: [tsTag, reactTag, tauriTag, electronTag],
    video: { type: "file", string: Storefront },
    alt: "A kiosk with a quick service retail application being used. The user navigates through a series of food menus, selecting their order.",
  },
  {
    id: "shooh",
    title: "SHOOH",
    subtitle: "ULTRALEAP",
    text: 'A product customisation application, created as a demo for TouchFree. Developing this app involved writing custom shaders to create the "scanner" and the colour customisation.',
    tags: [tsTag, reactTag, tauriTag, electronTag, threeJsTag],
    video: { type: "file", string: shOOH },
    alt: 'A kiosk with a product customisation application being used. The user is prompted to "pull scanner down" which reveals a training shoe. The shoe is rotated by the user swiping their hand. The shoe is expanded when a slider is moved along a track, then customised by selecting a section of the shoe and selecting a colour.',
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
    tags: [dotnetTag, { text: "Avalonia", color: "#ab64cc" }],
    alt: "The launcher window for the Ultraleap Widgets application. A list of the available widgets on the left hand side and an introduction on the right with links to a getting started guide and support pages.",
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
        alt: "Repository for Evie's Talking Buttons",
      },
    ],
    tags: [tsTag, { text: "Preact", color: "#875ad8" }],
    alt: "The main interface for Evie's Talking Buttons. Shows a grid of 6 different coloured buttons labelled: 'hello', 'feeling non-verbal', 'hungry', 'happy', 'tea, please' and 'milk no sugar'. Above is the title of the page and below is a button labelled 'settings'.",
  },
  {
    id: "tapa-tapa-tapa",
    title: "TAPA-TAPA-TAPA",
    subtitle: "Uni",
    text: "A multi-tap delay DAW plugin. Compiles to VST3 and AU. Originally made as coursework for my degree.",
    video: { type: "file", string: Tapa },
    alt: "Test",
    links: [
      {
        url: "https://github.com/cartmouse/Tapa-Tapa-Tapa",
        text: "GITHUB",
        image: GitHub,
      },
    ],
    tags: [cppTag, { text: "JUCE", color: "#f38d48" }],
  },
];
