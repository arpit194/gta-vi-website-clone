import { FaCirclePlay } from "react-icons/fa6";
import classes from "./Header.module.css";
import GtaViLogo from "../../assets/gta_vi_logo.svg?react";

const Header = () => {
  return (
    <div
      className={`${classes.container} ${classes.heroMask}`}
      id="hero-section-1"
    >
      <img src="/images/hero.jpg" alt="hero" className={classes.heroImg} />
      <img
        src="/images/gta_logo.png"
        alt="gta_logo"
        className={`will-fade ${classes.gtaLogo}`}
      />
      <img
        src="/images/hero-front.png"
        alt="hero"
        className={`${classes.heroImg} ${classes.heroImgFront}`}
      />
      <GtaViLogo className={`will-fade ${classes.gtaViLogo}`} />
      <p className={`will-fade ${classes.trailerText}`}>WATCH TRAILER 2</p>
      <FaCirclePlay className={`will-fade ${classes.trailerPlayIcon}`} />
    </div>
  );
};

export default Header;
