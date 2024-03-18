import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/build.jpg";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Welcome to Creation Media, where innovation meets passion! We are a dynamic team dedicated to redefining excellence in Marketing. 
        </h1>
        <br></br>
        <h2>Why chose us?</h2>
        
        

<p className="primary-text">Tailored Solutions: We understand that one size does not fit all. That's why we take the time to understand your brand, your audience, and your goals to create tailor-made ad templates that

resonate with your unique identity.</p> <p className="primary-text"> Creativity Unleashed: Our team of seasoned designers doesn't just think outside the box, they redefine it. From stunning visuals to compelling copy, we breathe life into your campaigns,

ensuring they leave a lasting impression.</p>

{/* <p className="primary-text">3. Data-Driven Strategies: We don't just rely on gut feelings; we let the data do the talking. Through meticulous analysis and optimization, we ensure that every ad template we create is backed by insights that maximize your ROI.</p> */}

{/* <p className="primary-text">4. Timely Delivery: In the world of digital marketing, timing is everything. With our efficient processes and commitment to deadlines, you can rest assured that your ad templates will be ready to launch precisely when you need them.</p> */}

{/* <p className="primary-text">Customer-Centric Approach: Your success is our success. That's why we prioritize open communication, transparency, and collaboration every step of the way. Your feedback shapes our process, ensuring that the final product exceeds your expectations.</p> */}

        
        <p className="primary-text">
       <br></br>
        Whether you're looking to increase brand awareness, drive conversions, or launch a new product, Creation Media is here to help you achieve your goals.

        Ready to elevate your digital presence? Get in touch with us today and let's turn your vision into reality!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> More About US
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
