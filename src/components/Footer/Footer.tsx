import "./Footer.scss";
import logoSvg from "../../images/logo.svg";
import copyrightSvg from "../../images/copyright.svg";
import SocialList from "../utils-components/SocialsList/SocialsList";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main-area">
        <a className="footer__logo-link" href="#">
          <img className="footer__logo" alt="Логотип Maroon" src={logoSvg} />
        </a>{" "}
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="#">
                Каталог
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="#">
                О нас
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="#">
                Магазины
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="#">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <SocialList />
      </div>
      <div className="footer__copyright-area">
        <p className="footer__copyright-text">Maroon <img src={copyrightSvg} alt="Copyright" /> 2020 Все права защищены</p>
        <a className="footer__copyright-link" href="#">
          <p className="footer__copyright-text">Политика конфиденциальности</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
