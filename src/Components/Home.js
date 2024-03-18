import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-background.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import About from './About';
import Work from './Work';
import Testimonial from './Testimonial';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Welcome to Creation Media, where creativity meets conversion!
            </h1>
            <p className="primary-text">
              Established in June 2021, we have swiftly risen to become a
              trusted partner for over 500 companies, delivering captivating ad
              templates that drive real results.
            </p>
            <p>
              In today's fast-paced digital landscape, standing out is not just
              an option-it's a necessity. At Creation Media, we specialize in
              crafting ads that not only catch the eye but also capture the
              hearts and minds of your target audience
            </p>
            <button className="secondary-button">
              Boost your Buisness <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
      <About />
      <Work />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
