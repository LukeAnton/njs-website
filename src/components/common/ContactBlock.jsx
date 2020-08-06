import React from "react";
import "./contactBlock.scss";

const ContactBlock = () => {
  return (
    <div className="block-container">
      <h1 className="contact-heading">Schedule Appointment</h1>
      <a href="mailto:njs@test.com" className="contact-button">
        Contact
      </a>
      <div className="contact-socials">
        <a
          href="https://www.instagram.com/njs_projects/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            style={{ color: "white" }}
            className=" social-icons fab fa-instagram fa-3x "
          />
        </a>
        <a
          href="https://www.instagram.com/njs_projects/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            style={{ color: "white" }}
            className=" social-icons fab fa-facebook-square fa-3x "
          />
        </a>
      </div>
    </div>
  );
};

export default ContactBlock;
