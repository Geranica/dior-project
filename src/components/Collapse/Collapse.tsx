import { AccordionPanel, Accordion } from "../Accordion/Accordion";
import sprite from "../../icons/sprite.svg";
import itemsData from "./collapseData";
import "./Collapse.scss";

const Collapse = () => {
  const items = itemsData.map((item, index) => {
    return (
      <AccordionPanel
        header={(isOpen) => (
          <CollapseLabel isOpen={isOpen} data={item} />
        )}
        content={() => <CollapseContent data={item} />}
        key={index}
      />
    );
  });

  return (
    <section className="collapse">
      <div className="collapse__container container container-pd">
        <Accordion items={items} />
      </div>
    </section>
  );
};

export default Collapse;

interface CollapseLabelProps {
  data: {
    children: string;
    label: {
      titleData: string;
      descriptionData: string;
    };
  };
  isOpen?: boolean;
}

const CollapseLabel: React.FC<CollapseLabelProps> = ({ data, isOpen }) => {
  return (
    <div className="collapse-label">
      <h5 className="collapse-label__title">{data.label.titleData}</h5>
      <div className="collapse-label__description">
        {data.label.descriptionData}
      </div>
      <svg
        className={
          isOpen
            ? "collapse-label__arrow collapse-label__arrow_active"
            : "collapse-label__arrow"
        }
      >
        <use href={`${sprite}#arrow-down`} />
      </svg>
    </div>
  );
};

interface CollapseContentProps {
  data: {
    children: string;
    label: {
      titleData: string;
      descriptionData: string;
    };
  };
  isOpen?: boolean;
}

const CollapseContent: React.FC<CollapseContentProps> = ({ data }) => {
  return <div className="collapse-content">{data.children}</div>;
};
