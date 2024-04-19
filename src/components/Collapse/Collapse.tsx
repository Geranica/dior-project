import Accordion from "../Accordion/Accordion";
import sprite from "../../icons/sprite.svg";
import itemsData from "./collapseData";
import "./Collapse.scss";

const Collapse = () => {
  const items = itemsData.map((item) => {
    return {
      header: (
        <CollapseLabel
          title={item.label.titleData}
          description={item.label.descriptionData}
        />
      ),
      content: <CollapseContent text={item.children} />,
    };
  });

  return (
    <section className="collapse">
      <div className="collapse__container container container-pd">
       <Accordion items={items}/>
      </div>
    </section>
  );
};

export default Collapse;

const CollapseLabel = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="collapse-label">
      <h5 className="collapse-label__title">{title}</h5>
      <div className="collapse-label__description">{description}</div>
      <svg className="collapse-label__arrow">
        <use href={`${sprite}#arrow-down`} />
      </svg>
    </div>
  );
};

const CollapseContent = ({ text }: { text: string }) => {
  return <div className="collapse-content">{text}</div>;
};
