import { FaPlaystation, FaXbox } from "react-icons/fa6";
import classes from "./Release.module.css";

const Release = () => {
  return (
    <div className={classes.container} id="hero-section-2">
      <div className={classes.logoContainer}>
        <img
          src="/images/gta_logo.png"
          alt="gta_logo"
          className={classes.gtaLogo}
        />
        <img
          src="/images/gta_vi_logo.png"
          alt="gta vi logo"
          className={classes.gtaViLogo}
        />
      </div>
      <div className={`${classes.releaseContainer} ${classes.releaseReveal}`}>
        <div className={classes.releaseDate}>COMING</div>
        <div className={classes.releaseDate}>MAY 26</div>
        <div className={classes.releaseDate}>2026</div>
        <div className={classes.releaseLogoContainer}>
          <FaPlaystation className={classes.releaseLogo} />
          <FaXbox className={classes.releaseLogo} />
        </div>
      </div>
    </div>
  );
};

export default Release;
