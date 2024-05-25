import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h2>My Services</h2>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h4>{service.s_no}</h4>
              <h3>{service.s_name}</h3>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
