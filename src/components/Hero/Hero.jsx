import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile image" />
      <h1>
        <span>I'm Farooque Parvez,</span> Frontend Developer based in India.
      </h1>
      <p>
        I'm Frontend Developer from Nagpur, India with over 4 years of
        experience in multiple companies like Microsfot, Google and Tesla.
      </p>
      <div className="hero-actions">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
