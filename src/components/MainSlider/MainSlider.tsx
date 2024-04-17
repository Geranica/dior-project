import Slider from "react-slick";
import { useRef } from "react";
import imgOneSlideOne from "../../assets/MainSlider/slide-1__image-1.jpg";
import imgTwoSlideOne from "../../assets/MainSlider/slide-1__image-2.jpg";
import imgOneSlideTwo from "../../assets/MainSlider/slide-2__image-1.png";
import imgOneSlideThree from "../../assets/MainSlider/slide-3__image-1.png";
import SliderArrows from "../SliderArrow/SliderArrow";
import MainButton from "../MainButton/MainButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainSlider.scss";

const MainSlider = () => {
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
  };
  return (
    <section className="main-slider">
      <div className="main-slider__container">
        <Slider ref={slider} {...settings}>
          <div className="main-slider__slide-1 slide-1">
            <div className="slide-1__container container">
              <div className="slide-1__first-image">
                <img src={imgOneSlideOne} alt="" />
              </div>
              <div className="slide-1__content">
                <h3 className="slide-1__title">GRIS DIOR</h3>
                <div className="slide-1__text-block">
                  <h4 className="slide-1__subtitle">Fragrance</h4>
                  <div className="slide-1__text">
                    With Gris Dior you dare to reveal your most surprising,
                    mysterious and unexpected facets.
                  </div>
                  <MainButton className="slide-1__button">DISCOVER</MainButton>
                </div>
              </div>
              <div className="slide-1__second-image">
                <img src={imgTwoSlideOne} alt="" />
              </div>
            </div>
          </div>
          <div className="main-slider__slide-2 slide-2">
            <div
              className="slide-2__wrapper"
              style={{ backgroundImage: `url(${imgOneSlideTwo})` }}
            >
              <div className="slide-2__container container">
                <MainButton className="slide-2__button">
                  YOUR NEW EXPERIENCE
                </MainButton>
              </div>
            </div>
          </div>
          <div className="main-slider__slide-3 slide-3">
            <div
              className="slide-3__wrapper"
              style={{ backgroundImage: `url(${imgOneSlideThree})` }}
            >
              <div className="slide-3__container container">
                <MainButton className="slide-3__button">
                  YOUR NEW EXPERIENCE
                </MainButton>
              </div>
            </div>
          </div>
        </Slider>
        <SliderArrows next={next} previous={previous} />
      </div>
    </section>
  );
};

export default MainSlider;
