import { useState } from "react";
import sliderData from "../data/sliderData";

import leftChevron from "../assets/left-arrow.svg";
import rightChevron from "../assets/right-arrow.svg";
import "./Slider.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  return (
    <>
      <p className="index-info">
        {slideIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === slideIndex).description}
        </p>
        <img
          src={"../../public/images/"}
          alt={"../data/sliderData.js"}
          className="slider-img"
        />
        <button className="navigation-button prev-button">
          <img src={leftChevron} />
        </button>
        <button className="navigation-button next-button">
          <img src={rightChevron} />
        </button>
      </div>
    </>
  );
};
export default Slider;
