import sprite from "../../icons/sprite.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-block__container container">
        <svg className="footer-block__logo">
          <use href={`${sprite}#logo`} />
        </svg>
        <div className="footer-block__image">
          <img src="src/assets/Footer/footer-image.jpg" alt="" />
        </div>
        <div className="footer-block__content">
          <div className="footer-block__form-block">
            <form className="footer-block__form" action="submit">
              <label htmlFor="e-mail">SIGN UP FOR EXCLUSIVITY</label>
              <input
                className="footer-block__input"
                placeholder="E-mail"
                type="email"
              />
            </form>
          </div>
          <div className="footer-block__body">
            <div className="footer-block__items">
              <div className="footer-block__item">
                <div className="footer-block__title">FIND A BOUTIQUE</div>
                <div className="footer-block__element">
                  Parfums Christian Dior Boutiques
                </div>
                <div className="footer-block__element">
                  Christian Dior Couture Boutiques
                </div>
              </div>
              <div className="footer-block__item">
                <div className="footer-block__title">CLIENT SERVICES</div>
                <div className="footer-block__element">
                  Contact Parfums Christian Dior
                </div>
                <div className="footer-block__element">Delivery & Returns</div>
                <div className="footer-block__element">FAQ</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-block__social">
          <a className="footer-block__social-link" href="#">
            <svg className="footer-block__social-icon">
              <use href={`${sprite}#youtube`} />
            </svg>
          </a>
          <a className="footer-block__social-link" href="#">
            <svg className="footer-block__social-icon">
              <use href={`${sprite}#twitter`} />
            </svg>
          </a>
          <a className="footer-block__social-link" href="#">
            <svg className="footer-block__social-icon">
              <use href={`${sprite}#facebook`} />
            </svg>
          </a>
          <a className="footer-block__social-link" href="#">
            <svg className="footer-block__social-icon">
              <use href={`${sprite}#instagram`} />
            </svg>
          </a>
        </div>
        <div className="footer-block__additional">
          <ul className="footer-block__list">
            <li className="footer-block__list-item">
              <a className="footer-block__additional-link" href="#">
                Legal Terms and Conditions
              </a>
            </li>
            <li className="footer-block__list-item">
              <a className="footer-block__additional-link" href="#">
                Data Protection
              </a>
            </li>
            <li className="footer-block__list-item">
              <a className="footer-block__additional-link" href="#">
                Personalize my choices
              </a>
            </li>
            <li className="footer-block__list-item">
              <a className="footer-block__additional-link" href="#">
                General Sales Conditions
              </a>
            </li>
            <li className="footer-block__list-item">
              <a className="footer-block__additional-link" href="#">
                Ethics & compliance
              </a>
            </li>
            <li className="footer-block__list-item">
              <a className="footer-block__additional-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
