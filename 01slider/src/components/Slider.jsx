import { useState, useEffect } from "react";
import sliderData from "../data/sliderData";

import leftChevron from "../assets/left-arrow.svg";
import rightChevron from "../assets/right-arrow.svg";
import "./Slider.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const toggleImage = (indexPayload) => {
    setSlideIndex((state) => {
      if (indexPayload + state > sliderData.length) {
        return 1;
      } else if (indexPayload + state < 1) {
        return sliderData.length;
      } else {
        return state + indexPayload;
      }
    });
  };

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2500);
    return () => clearInterval(intervalID);
  }, []);

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
          src={`../../public/images/img-${slideIndex}.jpg`}
          alt={"../data/sliderData.js"}
          className="slider-img"
        />
        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} />
        </button>
      </div>
    </>
  );
};
export default Slider;
