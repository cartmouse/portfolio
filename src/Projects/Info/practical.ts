import { GitHubLight } from "@Assets";
import { ProjectCategory, cppTag, dotnetTag, reactTag, tsTag } from "@Projects";
import { asset } from "@Utils";

export const practical: ProjectCategory = {
  title: "Practical",
  anchor: "practical",
  projects: [
    {
      id: "touchfree",
      title: "TouchFree",
      subtitle: "Ultraleap",
      desc: "Touchless interaction engine and tooling libraries for Unity and web",
      text: "Enables touchless gesture control for kiosks and digital signage.",
      image: asset("touchfree.jpg"),
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
      text: "Featuring actions such as: play/pause/skip media, navigate through presentation slides, point with a virtual laser, and controlling the cursor to click and scroll.",
      image: asset("widgets.jpg"),
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
      desc: "Refresh of the job search section of the IVC Evidensia careers site.",
      text: "",
      image: asset("careers.jpg"),
      links: [
        { url: "https://ivcevidensia.co.uk/careers", text: "Visit Site" },
      ],
      tags: [reactTag, tsTag],
    },
    {
      id: "tapa-tapa-tapa",
      title: "Tapa-Tapa-Tapa",
      subtitle: "Uni",
      desc: "Multi-tap delay DAW plugin",
      text: "Compiles to VST3 and AU. Originally made as coursework for my degree.",
      image: asset("tapa-tapa-tapa.jpg"),
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
      desc: "Aid for people who sometimes prefer to remain non-verbal",
      text: "Customisable buttons that use the device's text-to-speech engine to say the words aloud.",
      image: asset("eviesbuttons.jpg"),
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
