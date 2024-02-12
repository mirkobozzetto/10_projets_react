import leftChevron from "../assets/left-arrow.svg";
import rightChevron from "../assets/right-arrow.svg";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <p className="index-info"> {} / 5 </p>
      <div className="slider">
        <p className="image-info"> {} </p>
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
