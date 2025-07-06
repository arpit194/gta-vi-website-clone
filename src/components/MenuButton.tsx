import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type MenuButtonProps = {
  isOpen: boolean;
};

const MenuButton = ({ isOpen }: MenuButtonProps) => {
  useGSAP(() => {
    const menuButtonTimeline = gsap.timeline();
    if (isOpen) {
      menuButtonTimeline
        .to("#menu-line-1", {
          rotation: 45,
          translateY: "100%",
          ease: "power1.inOut",
        })
        .to(
          "#menu-line-2",
          {
            rotation: -45,
            translateY: "-100%",
            ease: "power1.inOut",
          },
          "-=0.5"
        );
    } else {
      menuButtonTimeline
        .to("#menu-line-1", {
          rotation: 0,
          translateY: "0",
          ease: "power1.inOut",
        })
        .to(
          "#menu-line-2",
          {
            rotation: 0,
            translateY: "0",
            ease: "power1.inOut",
          },
          "-=0.5"
        );
    }
  }, [isOpen]);
  return (
    <div className="flex flex-col justify-center items-center gap-2 z-51">
      <div className="w-10 h-2 bg-white" id="menu-line-1" />
      <div className="w-10 h-2 bg-white" id="menu-line-2" />
    </div>
  );
};

export default MenuButton;
