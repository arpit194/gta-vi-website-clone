import classes from "./Release.module.css";

export const releaseAnimation = (timeline: gsap.core.Timeline) => {
  timeline
    .to(`.${classes.gtaLogo}`, {
      opacity: 1,
      duration: 0,
    })
    .fromTo(
      `.${classes.gtaLogo}`,
      {
        translateY: "50%",
      },
      {
        scale: 0.65,
        translateY: "0%",
        ease: "power1.inOut",
      }
    )
    .to(
      `.${classes.gtaViLogo}`,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      },
      "-=0.5"
    )
    .from(`.${classes.releaseContainer}`, {
      "--reveal-radius": "0%",
      "--gradient-color-from": "oklch(66.6% 0.179 58.318)",
      "--gradient-color-to": "oklch(64.5% 0.246 16.439)",
      duration: 1,
      ease: "power1.out",
    })
    .to(
      `.${classes.logoContainer}`,
      {
        scale: 0.5,
        ease: "power1.inOut",
      },
      "-=1"
    )
    .to(`.${classes.releaseContainer}`, {
      "--reveal-radius": "0%",
      opacity: 0,
      ease: "power1.inOut",
    })
    .to(
      `.${classes.logoContainer}`,
      {
        y: 100,
        opacity: 0,
        ease: "power1.inOut",
      },
      "-=0.5"
    )
    .to("#hero-section-2", {
      opacity: 0,
      duration: 0,
    });
};
