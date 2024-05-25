import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import call_icon from "../../assets/call_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bf7dd066-fbcb-4a9a-b2e2-7089a5c565fd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Your Email Has Been Sent Successfully!");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h2>Get In Touch</h2>
        <img src={theme_pattern} alt="contact image" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's Talk!</h3>
          <p>
            I'm currently available to take new project. Feel free to message
            whenever you need my services.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" />
              <p>farooqueparvez@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="mail icon" />
              <p>+91 9021465049</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="mail icon" />
              <p>Nagpur, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" />
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
