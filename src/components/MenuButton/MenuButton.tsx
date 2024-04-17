import "./MenuButton.scss";

const MenuButton = ({
  clicked,
  onClick,
}: {
  clicked: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`burger-menu-button ${clicked ? "open" : ""}`}
      onClick={onClick}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default MenuButton;
