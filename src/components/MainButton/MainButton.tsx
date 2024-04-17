import { ReactNode } from "react";
import "../MainButton/MainButton.scss";

interface MainButtonInterface {
  children: ReactNode;
  className: string;
}

const MainButton = ({ children, className }: MainButtonInterface) => {
  const styles = `main-button ${className}`;
  return (
    <a className={styles} href="#">
      {children}
    </a>
  );
};

export default MainButton;
