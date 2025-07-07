import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "./Header";
import { headerAnimation } from "./headerAnimation";
import Release from "./Release";
import { releaseAnimation } from "./releaseAnimation";
import Story from "./Story";
import { storyAnimation } from "./storyAnimation";

const Hero = () => {
  useGSAP(() => {
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom -300%",
        scrub: true,
        pin: true,
      },
    });

    headerAnimation(heroTimeline);
    releaseAnimation(heroTimeline);
    storyAnimation(heroTimeline);
  }, []);

  return (
    <header id="hero" className="h-screen relative bg-black isolate">
      <Header />
      <Release />
      <Story />
    </header>
  );
};

export default Hero;
