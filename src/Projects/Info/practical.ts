import { GitHubLight } from "@Assets";
import { ProjectCategory, cppTag, dotnetTag, reactTag, tsTag } from "@Projects";
import { asset } from "@Utils";

export const practical: ProjectCategory = {
  title: "Practical",
  anchor: "practical",
  description: "Solving problems with tools and apps",
  projects: [
    {
      id: "touchfree",
      title: "TouchFree",
      subtitle: "Ultraleap",
      desc: "Touchless interaction engine and tooling libraries for Unity and web",
      text: `TouchFree is a service and set of tooling libraries that enable touchless gesture control for kiosks and digital signage.
      
      During my time on this project, I contributed to a number of changes and iterations. From a overhaul of the settings UI - featuring a move to a web based UI, and redesign to make it responsive - to investigations into novel, intuative, interpretive gesture detection and more technical focused changes such as integrating unit testing into the web tooling library.`,
      images: [{ src: asset("touchfree.jpg"), alt: "" }],
      video: {
        type: "url",
        string: "https://www.youtube.com/embed/lcPMSjG6gD8?si=PYSS4F20KJ1a78qq",
      },
      alt: "Embedded YouTube video demonstrating the use of the TouchFree mid-air interaction software.",
      links: [
        {
          url: "https://www.ultraleap.com/enterprise/touchless-experiences/touchfree-solution/",
          text: "Vist site",
        },
        {
          url: "https://github.com/ultraleap/TouchFree",
          text: "TouchFree",
          image: GitHubLight,
          alt: "Repository for TouchFree",
        },
        {
          url: "https://github.com/ultraleap/TouchFreeWebTooling",
          text: "Web Tooling",
          image: GitHubLight,
          alt: "Repository for TouchFree Web Tooling",
        },
      ],
      tags: [tsTag, reactTag, dotnetTag],
    },
    {
      id: "widgets",
      title: "Widgets",
      subtitle: "Ultraleap",
      desc: "Selection of apps for gestural control of Windows and MacOS",
      text: `The Ultraleap Widgets is a desktop launcher that features a selection off apps that allow for gesture control of Windows and MacOS using the Leap Motion Controllers. It enables: play/pause/skiping media, navigating through presentation slides, pointing with a virtual laser, and controlling the cursor to click and scroll.

      This project was written using the Avalonia framework to enable cross-platform development with a single codebase.`,
      images: [{ src: asset("widgets.jpg"), alt: "" }],
      links: [
        {
          url: "https://leap2.ultraleap.com/ultraleap-widgets/",
          text: "Vist site",
        },
      ],
      tags: [dotnetTag, { text: "Avalonia", color: "#ab64cc" }],
      alt: "The launcher window for the Ultraleap Widgets application. A list of the available widgets on the left hand side and an introduction on the right with links to a getting started guide and support pages.",
    },
    {
      id: "ivc-careers",
      title: "Careers Site",
      subtitle: "IVC Evidensia",
      desc: "Refresh of the job search section of the IVC Evidensia careers site",
      text: "I was a key part of the push to refresh the careers site at IVC Evidensia. With involvement in both front and backend development, I helped determine the best way to approach certain challenges (such as the job search dropdowns that had a complex collections of options); developed React components and helped junior developers with their assigned tasks.",
      images: [{ src: asset("careers.jpg"), alt: "" }],
      links: [
        { url: "https://ivcevidensia.co.uk/careers", text: "Visit Site" },
      ],
      tags: [reactTag, tsTag],
    },
    {
      id: "tapa-tapa-tapa",
      title: "Tapa-Tapa-Tapa",
      subtitle: "University",
      desc: "Multi-tap delay DAW plugin",
      text: `Tapa-Tapa-Tapa is a multi-tap delay plugin that compiles to VST3 and AU formats.
      
      This project helped to solidify my understanding of digital audio priniples (such as buffers and delay lines) by having to implement them in C++ and the JUCE framework.`,
      images: [{ src: asset("tapa-tapa-tapa.jpg"), alt: "" }],
      alt: "The following controls of the Tapa-Tapa-Tapa delay plugin: Dry/Wet, Tap Mix, Feedback %, Time and Tap %.",
      video: { type: "file", string: asset("tapa-tapa-tapa.mp4") },
      links: [
        {
          url: "https://github.com/cartmouse/Tapa-Tapa-Tapa",
          text: "GitHub",
          image: GitHubLight,
        },
      ],
      tags: [cppTag, { text: "JUCE", color: "#f38d48" }],
    },
    {
      id: "buttons",
      title: "Evie's Buttons",
      subtitle: "Personal",
      desc: "Communication aid for people who sometimes prefer to remain non-verbal",
      text: `Customisable buttons that use the device's text-to-speech engine to enable simple and repeatable communication.`,
      images: [{ src: asset("eviesbuttons.jpg"), alt: "" }],
      video: { type: "file", string: asset("eviesbuttons.mp4") },
      links: [
        { url: "https://eviesbuttons.netlify.app", text: "Visit Site" },
        {
          url: "https://github.com/cartmouse/evies-talking-buttons",
          text: "GitHub",
          image: GitHubLight,
          alt: "Repository for Evie's Talking Buttons",
        },
      ],
      tags: [tsTag, { text: "Preact", color: "#875ad8" }],
      alt: "The main interface for Evie's Talking Buttons. Shows a grid of 6 different coloured buttons labelled: 'hello', 'feeling non-verbal', 'hungry', 'happy', 'tea, please' and 'milk no sugar'. Above is the title of the page and below is a button labelled 'settings'.",
    },
  ],
};
