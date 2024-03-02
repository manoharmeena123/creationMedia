import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1>Creation Media</h1>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          
          <span>Help</span>
          <span>Share</span>
          <span>Feedback</span>
          <span>Contact Us</span>
        </div>
        <div className="footer-section-columns">
          <span>+918327680216</span>
          <span>Creation.media@gmail.com</span>
          <span>IBC Knowledge park,
            
          </span>
          <span>phase 2, 9th floor,
            Banglore, Karnataka, 560029</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
