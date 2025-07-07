import classes from "./Header.module.css";

export const headerAnimation = (timeline: gsap.core.Timeline) => {
  timeline
    .to(`.${classes.heroMask}`, {
      maskSize: "350px",
      duration: 1,
      ease: "power1.inOut",
    })
    .to(
      `.${classes.heroImg}`,
      {
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      "-=1"
    )
    .to(
      `.will-fade`,
      {
        opacity: 0,
        duration: 0.75,
        ease: "power1.inOut",
      },
      "-=1"
    )
    .to(
      `.${classes.heroImg}`,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      },
      "-=0.3"
    )
    .to("#hero-section-1", {
      opacity: 0,
      duration: 0,
    });
};
