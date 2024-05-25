import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Frontend Developer from Nagpur, India with over 4 years of
              experience in multiple companies like Microsfot, Google and Tesla.
            </p>
            <p>
              I'm Frontend Developer from Nagpur, India with over 4 years of
              experience in multiple companies like Microsfot, Google and Tesla.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>NextJS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h3>90+</h3>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h3>15+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
