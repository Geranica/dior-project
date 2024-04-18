import sprite from "../../icons/sprite.svg";
import "./SliderArrow.scss";

const SliderArrowLeft = (props: { previous: () => void }) => {
  return (
    <svg onClick={props.previous} className="slider-arrow slider-arrow_left">
      <use href={`${sprite}#arrow-left`} />
    </svg>
  );
};

const SliderArrowRight = (props: { next: () => void }) => {
  return (
    <svg onClick={props.next} className="slider-arrow slider-arrow_right">
      <use href={`${sprite}#arrow-right`} />
    </svg>
  );
};

const SliderArrows = ({ previous, next }) => {
  return (
    <div className="arrows-block">
      <SliderArrowLeft previous={previous} />
      <SliderArrowRight next={next} />
    </div>
  );
};

export default SliderArrows;
