import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaCirclePlay, FaPlaystation, FaXbox } from "react-icons/fa6";

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

    heroTimeline
      .to(".hero-mask", {
        maskSize: "100%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        ".hero-img",
        {
          scale: 1,
          duration: 1,
          ease: "power1.inOut",
        },
        "-=1"
      )
      .to(
        ".will-fade-1",
        {
          opacity: 0,
          duration: 0.75,
          ease: "power1.inOut",
        },
        "-=1"
      )
      .to(
        ".hero-img",
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
      })
      .to(".will-reveal-1", {
        opacity: 1,
        duration: 0,
      })
      .to(".will-reveal-1", {
        opacity: 1,
        scale: 0.35,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(
        ".will-reveal-2",
        {
          opacity: 1,
          scale: 0.5,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "-=0.5"
      )
      .from(".release-reveal", {
        "--reveal-radius": "0%",
        duration: 1,
        ease: "power1.out",
      })
      .to(".release-reveal, .will-reveal-1, .will-reveal-2", {
        scale: 0.25,
        "--reveal-radius": "0%",
        opacity: 0,
        ease: "power1.inOut",
      })
      .to("#hero-section-2", {
        opacity: 0,
        duration: 0,
      })
      .from(".story-reveal", {
        "--reveal-radius": "0%",
        duration: 1,
        ease: "power1.out",
      })
      .to(".story-reveal", {
        "--reveal-radius": "0%",
        duration: 1,
        ease: "power1.out",
      });
  }, []);

  return (
    <header id="hero" className="h-screen relative bg-black isolate">
      <div
        className="absolute top-0 left-0 w-full h-full hero-mask isolate bg-white z-3"
        id="hero-section-1"
      >
        <img
          src="/images/hero.jpg"
          alt="hero"
          className="hero-img absolute w-full h-full object-cover top-1/2 left-1/2 -translate-1/2 z-1 scale-120"
        />
        <img
          src="/images/gta_logo.png"
          alt="gta_logo"
          className="will-fade-1 absolute top-10 left-1/2 -translate-x-1/2 z-2"
        />
        <img
          src="/images/hero-front.png"
          alt="hero"
          className="hero-img absolute w-full h-full object-cover top-1/2 left-1/2 -translate-1/2 z-3 scale-120"
        />
        <img
          src="/images/gta_vi_logo.svg"
          alt="gta_logo"
          className="will-fade-1 z-4 absolute bottom-10 left-1/2 -translate-x-1/2 invert size-40"
        />
        <p className="will-fade-1 z-4 absolute bottom-27 tracking-widest font-semibold left-1/2 -translate-x-1/2 invert text-2xl">
          WATCH TRAILER 2
        </p>
        <FaCirclePlay className="will-fade-1 z-4 absolute top-1/2 left-1/2 -translate-1/2 size-35 invert" />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full isolate bg-black z-2"
        id="hero-section-2"
      >
        <img
          src="/images/gta_logo.png"
          alt="gta_logo"
          className="will-reveal-1 absolute top-10 left-1/2 -translate-x-1/2 z-2 opacity-0"
        />
        <img
          src="/images/gta_vi_logo.png"
          alt="gta vi logo"
          className="will-reveal-2 absolute top-10 left-1/2 -translate-x-1/2 z-1 opacity-0"
        />
        <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 font-primary bg-gradient-to-b from-fuchsia-400 to-rose-300 text-9xl font-extrabold bg-clip-text text-transparent release-reveal">
          <div className="text-9xl font-extrabold">COMING</div>
          <div className="text-9xl font-extrabold">MAY 26</div>
          <div className="text-9xl font-extrabold">2026</div>
          <div className="flex gap-10 justify-center mt-10">
            <FaPlaystation fill="white" className="size-15" />
            <FaXbox fill="white" className="size-15" />
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full isolate bg-black z-1 flex flex-col justify-center items-center gap-5 font-primary"
        id="hero-section-3"
      >
        <div className="bg-gradient-to-b from-fuchsia-400 to-rose-300 text-9xl font-extrabold bg-clip-text text-transparent story-reveal flex flex-col justify-center items-center gap-10">
          <h2 className="w-1/2 text-left text-7xl font-bold">
            Vice City, USA.
          </h2>
          <p className="w-1/2 text-left text-4xl font-semibold">
            Jason and Lucia have always known the deck is stacked against them.
            But when an easy score goes wrong, they find themselves on the
            darkest side of the sunniest place in America, in the middle of a
            criminal conspiracy stretching across the state of Leonida — forced
            to rely on each other more than ever if they want to make it out
            alive.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
