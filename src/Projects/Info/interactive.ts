import {
  electronTag,
  iosTag,
  reactTag,
  tauriTag,
  threeJsTag,
  tsTag,
  unityTag,
  ProjectCategory,
} from "@Projects";
import { asset } from "@Utils";

export const interactive: ProjectCategory = {
  title: "Interactive",
  anchor: "interactive",
  description: "Engaging users with interesting and playful interactions",
  projects: [
    {
      id: "playtonik",
      title: "Playtonik",
      subtitle: "5of12",
      desc: "Mobile, musical fidget experience with physics based interactions and immersive spacial audio",
      text: `Playtonik is a musical, fidget experience. It uses physics-based interactions, immersive spatial audio and dynamic haptic feedback for a fun, relaxing experience.

      I've played many roles in this project. From implementing features such as the free spin control, and the looper. To designing the haptic patterns for each shape and creating demonstration and marketing content.`,
      tags: [unityTag, iosTag],
      media: [
        {
          type: "youtube",
          src: "https://www.youtube.com/embed/MkLJ0BE3qDk",
          title: "playtonik",
        },
      ],
      links: [
        {
          url: "https://5of12.co.uk/#playtonik",
          text: "Website",
        },
        {
          url: "https://apps.apple.com/gb/app/playtonik/id6738356927",
          text: "App Store",
        },
      ],
      thumbnail: { src: asset("playtonik.jpg"), alt: "The Playtonik logo" },
    },
    {
      id: "madronzio",
      title: "Madronzio",
      subtitle: "Ultraleap",
      desc: "Immersive and interactive product exploration experience",
      text: `Madronzio was created to demonstrate how touchless and gesture interactions can enhance the experience of product exploration.

      The high quality render animations were achieved by exporting frames of a video to PNGs, then rendering them in sequence to a canvas. This allowed for fine control over what frame was displayed at a given moment, giving a more engaging user experience.`,
      tags: [tsTag, reactTag, tauriTag],
      media: [{ type: "url", src: asset("madronzio.mp4"), title: "madronzio" }],
      thumbnail: {
        src: asset("madronzio.jpg"),
        alt: "A kiosk showing a perfume bottle being explored.",
      },
    },
    {
      id: "ballpit",
      title: "Ballpit",
      subtitle: "Ultraleap",
      desc: "Gamified, interactive experience for branch presentation",
      text: "Ballpit was created to demonstrate a game-like experience for brand presentation. It was designed to be intuative and engaging to draw people into the experience and engage with the brand on show.",
      tags: [tsTag, reactTag, tauriTag, electronTag, threeJsTag],
      media: [{ type: "url", src: asset("ballpit.mp4"), title: "ballpit" }],
      thumbnail: { src: asset("ballpit.jpg"), alt: "" },
    },
    {
      id: "storefront",
      title: "Storefront",
      subtitle: "Ultraleap",
      desc: "Menu browsing and checkout experience for quick service retail",
      text: `Storefront was created to demonstrate how the familiar quick service retail checkout experience can be enhanced through touchless interactions.

      This allowed the exploration of features not possible in the standard touchscreen environment, such as hover states and selection progress.`,
      tags: [tsTag, reactTag, tauriTag, electronTag],
      media: [
        { type: "url", src: asset("storefront.mp4"), title: "storefront" },
      ],
      thumbnail: { src: asset("storefront.jpg"), alt: "" },
    },
    {
      id: "shooh",
      title: "ShOOH",
      subtitle: "Ultraleap",
      desc: "Immersive and interactive product customisation experience",
      text: `ShOOH (shoe x Out Of Home) was created to demonstrate and entertaining and engaging way that touchless interaction can be used for product customisation.
      
      Development of this experience involved lots of custom graphics programming such as writing shaders to create the "scanner" and changing the colour of the shoe model; and creating the particle effects. This was all implemented utilising the three.js library.`,
      tags: [tsTag, reactTag, tauriTag, electronTag, threeJsTag],
      media: [{ type: "url", src: asset("shooh.mp4"), title: "shooh" }],
      thumbnail: { src: asset("shooh.jpg"), alt: "" },
    },
  ],
};
