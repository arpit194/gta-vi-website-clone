import classes from "./Story.module.css";

export const storyAnimation = (timeline: gsap.core.Timeline) => {
  timeline
    .from(`.${classes.storyReveal}`, {
      "--reveal-radius": "0%",
      "--gradient-color-from": "oklch(66.6% 0.179 58.318)",
      "--gradient-color-to": "oklch(64.5% 0.246 16.439)",
      duration: 1,
      ease: "power1.out",
    })
    .to(`.${classes.storyReveal}`, {
      "--reveal-radius": "0%",
      duration: 1,
      ease: "power1.out",
    });
};
