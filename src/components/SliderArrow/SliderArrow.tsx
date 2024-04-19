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

const SliderArrows = ({
  previous,
  next,
  className,
}: {
  previous: () => void;
  next: () => void;
  className: string;
}) => {
  const style = `arrows-block ${className}`;
  return (
    <div className={style}>
      <SliderArrowLeft previous={previous} />
      <SliderArrowRight next={next} />
    </div>
  );
};

export default SliderArrows;
