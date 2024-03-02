import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/icon5.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    // {
    //   image: PickMeals,
    //   title: "Choose",
    //   // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    // },
    // {
    //   image: ChooseMeals,
    //   title: "Understand",
    //   // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    // },
    // {
    //   image: DeliveryMeals,
    //   title: "Launch",
    //   // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    // },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Joining us means becoming part of a community that values not just what you do, but who you are. We invest in our people, providing opportunities for growth, development, and the chance to make a meaningful impact. As we strive for excellence, we understand that our greatest asset is our team, 
        and we're always on the lookout for passionate individuals who share our vision and want to contribute to something extraordinary.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
