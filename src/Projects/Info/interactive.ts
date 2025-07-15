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

      I joined this project a few weeks before the v1 launch. In that time, I implemented the "free spin" control, made each shape have a distinct sound, and designed the haptic patterns for each shape.`,
      tags: [unityTag, iosTag],
      image: asset("playtonik.jpg"),
      video: {
        type: "url",
        string: "https://www.youtube.com/embed/MkLJ0BE3qDk",
      },
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
    },
    {
      id: "madronzio",
      title: "Madronzio",
      subtitle: "Ultraleap",
      desc: "Immersive and interactive product exploration experience",
      text: `Madronzio was created to demonstrate how touchless and gesture interactions can enhance the experience of product exploration.

      The high quality render animations were achieved by exporting frames of a video to PNGs, then rendering them in sequence to a canvas. This allowed for fine control over what frame was displayed at a given moment, giving a more engaging user experience.`,
      tags: [tsTag, reactTag, tauriTag],
      image: asset("madronzio.jpg"),
      video: { type: "file", string: asset("madronzio.mp4") },
      alt: "A kiosk with a retail application being used. Showing the inner mechanics of a watch being explored.",
    },
    {
      id: "ballpit",
      title: "Ballpit",
      subtitle: "Ultraleap",
      desc: "Gamified, interactive experience for branch presentation",
      text: "Ballpit was created to demonstrate a game-like experience for brand presentation. It was designed to be intuative and engaging to draw people into the experience and engage with the brand on show.",
      tags: [tsTag, reactTag, tauriTag, electronTag, threeJsTag],
      image: asset("ballpit.jpg"),
      video: { type: "file", string: asset("ballpit.mp4") },
      alt: 'A kiosk with a brand experience application being used. The user is prompted to "clear the balls" then balls enter the screen, the user moves them around, emptying the pit. A message reading "TouchFree is engaging" is displayed under the balls.',
    },
    {
      id: "storefront",
      title: "Storefront",
      subtitle: "Ultraleap",
      desc: "Menu browsing and checkout experience for quick service retail",
      text: `Storefront was created to demonstrate how the familiar quick service retail checkout experience can be enhanced through touchless interactions.

      This allowed the exploration of features not possible in the standard touchscreen environment, such as hover states and selection progress.`,
      tags: [tsTag, reactTag, tauriTag, electronTag],
      image: asset("storefront.jpg"),
      video: { type: "file", string: asset("storefront.mp4") },
      alt: "A kiosk with a quick service retail application being used. The user navigates through a series of food menus, selecting their order.",
    },
    {
      id: "shooh",
      title: "ShOOH",
      subtitle: "Ultraleap",
      desc: "Immersive and interactive product customisation experience",
      text: `ShOOH (shoe x Out Of Home) was created to demonstrate and entertaining and engaging way that touchless interaction can be used for product customisation.
      
      Development of this experience involved lots of custom graphics programming such as writing shaders to create the "scanner" and changing the colour of the shoe model; and creating the particle effects. This was all implemented utilising the three.js library.`,
      tags: [tsTag, reactTag, tauriTag, electronTag, threeJsTag],
      image: asset("shooh.jpg"),
      video: { type: "file", string: asset("shooh.mp4") },
      alt: 'A kiosk with a product customisation application being used. The user is prompted to "pull scanner down" which reveals a training shoe. The shoe is rotated by the user swiping their hand. The shoe is expanded when a slider is moved along a track, then customised by selecting a section of the shoe and selecting a colour.',
    },
  ],
};
