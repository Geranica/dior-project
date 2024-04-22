import { ReactNode, useState } from "react";
import "./Accordion.scss";

interface AccordionProps {
  items: ReactNode[];
}

export const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className="accordion">
      <div className="accordion__container">{items}</div>
    </div>
  );
};

interface AccordionPanel {
  content: () => ReactNode;
  header: (isOpen: boolean) => ReactNode;
}

export const AccordionPanel = ({ header, content }: AccordionPanel) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion-panel">
      <div className="accordion-panel__container">
        <div onClick={handleClick} className="accordion-panel__header">
          {header(isOpen)}
        </div>
        <div
          className={
            isOpen
              ? "accordion-panel__content accordion-panel__content_active"
              : "accordion-panel__content"
          }
        >
          {content()}
        </div>
      </div>
    </div>
  );
};
