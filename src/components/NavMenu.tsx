import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  useGSAP(() => {
    const navMenuTimeline = gsap.timeline();
    if (isOpen) {
      navMenuTimeline
        .to("#nav-menu", {
          opacity: 1,
          duration: 0,
          display: "flex",
          ease: "power1.inOut",
        })
        .fromTo(
          "#nav-menu-options, #nav-menu-img",
          {
            xPercent: 100,
          },
          {
            xPercent: 0,
            duration: 0.5,
            ease: "power1.inOut",
          }
        )
        .fromTo(
          "#nav-menu-img",
          {
            xPercent: -100,
          },
          {
            xPercent: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "-=0.5"
        );
    } else {
      navMenuTimeline
        .fromTo(
          "#nav-menu-img",
          {
            xPercent: 0,
          },
          {
            xPercent: -100,
            duration: 0.5,
            ease: "power1.inOut",
          }
        )
        .fromTo(
          "#nav-menu-options",
          {
            xPercent: 0,
          },
          {
            xPercent: 100,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "-=0.5"
        )
        .to("#nav-menu", {
          opacity: 1,
          display: "none",
          duration: 0,
          ease: "power1.inOut",
        });
    }
  }, [isOpen]);

  return (
    <div
      id="nav-menu"
      className="fixed top-0 left-0 w-full h-screen z-50 flex opacity-0"
    >
      <div
        id="nav-menu-img"
        className="bg-green-500 flex-1 flex justify-center items-center bg-gradient-to-br from-cyan-800 to-fuchsia-300 brightness-75"
      >
        <img
          src="/images/gta_vi_logo.png"
          alt="GTA 6 Logo"
          className="size-100 object-contain grayscale"
        />
      </div>
      <div id="nav-menu-options" className="bg-black flex-1"></div>
    </div>
  );
};

export default NavMenu;
