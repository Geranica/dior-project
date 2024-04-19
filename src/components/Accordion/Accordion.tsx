import { ReactNode, useState } from "react";
import "./Accordion.scss";

interface AccordionProps {
  items: { header: ReactNode; content: ReactNode }[];
}

const Accordion = ({ items }: AccordionProps) => {
  const panelItems = items.map((item, index) => {
    return (
      <AccordionPanel key={index} header={item.header} content={item.content} />
    );
  });

  return (
    <div className="accordion">
      <div className="accordion__container">{panelItems}</div>
    </div>
  );
};

export default Accordion;

const AccordionPanel = ({
  header,
  content,
}: {
  header: ReactNode;
  content: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion-panel">
      <div className="accordion-panel__container">
        <div onClick={handleClick} className="accordion-panel__header">
          {header}
        </div>
        <div
          className={
            isOpen
              ? "accordion-panel__content accordion-panel__content_active"
              : "accordion-panel__content"
          }
        >
          {content}
        </div>
      </div>
    </div>
  );
};
