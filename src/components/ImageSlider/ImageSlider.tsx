import { useRef } from "react";
import Slider from "react-slick";
import SliderArrows from "../SliderArrow/SliderArrow";
import slidesData from "./slidesData";
import MainButton from "../MainButton/MainButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss";

const ImageSlider = () => {
  const slider = useRef<Slider>(null);
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true
  };

  const slideElements = slidesData.map((item, index) => {
    return (
      <div key={index} className="image-slider__slide-container">
        <h4 className="image-slider__slide-titel">{item.label}</h4>
        <div className="image-slider__image">
          <img src={item.image} alt="image" />
        </div>
      </div>
    );
  });

  return (
    <section className="image-slider">
      <div className="image-slider__container container">
        <div className="image-slider__first-block">
          <SliderArrows previous={previous} next={next} />
        </div>
        <div className="image-slider__second-block">
          <div className="image-slider__slider">
            <Slider ref={slider} {...settings}>
              {slideElements}
            </Slider>
          </div>
          <MainButton className="image-slider__button">SHOW ME MORE</MainButton>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
