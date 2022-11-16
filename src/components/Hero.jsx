import React from "react";

// images
import BackgroundImage from "../imgs/COD_Hub_Hero_Desktop.jpeg";
import WarZoneLogo from "../imgs/cod-wz2-logo.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "length",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-textContainer">
        <img className="hero-textContainer-img" src={WarZoneLogo} alt="" />
        <p className="hero-textContainer-p">
          WELCOME TO AL MAZRAH READY UP AND DROP INTO CALL OF DUTY®: WARZONETM
          2.0
        </p>
        <div className="hero-textContainer-links">
          <a className="hero-textContainer-links--link" href="#">
            GET INTEL
          </a>
          <a className="hero-textContainer-links--link" href="#">
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
