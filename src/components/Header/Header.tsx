import { useState } from "react";
import sprite from "../../icons/sprite.svg";
import MenuButton from "../MenuButton/MenuButton";
import { useEffect } from "react";
import stopAnimationOnWindowResize from "../../utils/stopAnimationOnWindowResize";
import "./Header.scss";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger((current) => !current);
  };

  useEffect(() => {
    const unsubscribe = stopAnimationOnWindowResize();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__logo-link" href="#">
          <svg className="header__logo">
            <use href={`${sprite}#logo`} />
          </svg>
        </a>
        <div
          className={
            burger
              ? "header__content header__content_active"
              : "header__content"
          }
        >
          <h3 className="header__title">LA COLLECTION PRIVÉE CHRISTIAN DIOR</h3>
          <nav className="header__navigation">
            <ul className="header__list-navigation">
              <li className="header__list-item">
                <a href="#">WOMEN'S FRAGRANCE</a>
              </li>
              <li className="header__list-item">
                <a href="#">MEN'S FRAGRANCE</a>
              </li>
              <li className="header__list-item">
                <a href="#">MAKEUP</a>
              </li>
              <li className="header__list-item">
                <a href="#">SKINCARE</a>
              </li>
              <li className="header__list-item">
                <a href="#">DIOR SPA</a>
              </li>
            </ul>
          </nav>
          <nav className="header__additional-navigation">
            <ul className="header__additional-navigation-list">
              <li className="header__additional-list-item">
                <a href="">
                  <svg className="header__additional-list-img">
                    <use href={`${sprite}#heart`} />
                  </svg>
                </a>
              </li>
              <li className="header__additional-list-item">
                <a href="">
                  <svg className="header__additional-list-img">
                    <use href={`${sprite}#shop`} />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <MenuButton onClick={toggleBurger} clicked={burger} />
      </div>
    </header>
  );
};
export default Header;
