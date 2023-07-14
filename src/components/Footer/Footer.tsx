import "./Footer.scss";
import { Link } from "react-router-dom";
import logoSvg from "../../images/logo.svg";
import copyrightSvg from "../../images/copyright.svg";
import SocialList from "../utils-components/SocialsList/SocialsList";
import Nav from "../Nav/Nav";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main-area">
        <a className="footer__logo-link" href="#">
          <img className="footer__logo" alt="Логотип Maroon" src={logoSvg} />
        </a>{" "}
        <Nav type="footer" />
        <SocialList />
      </div>
      <div className="footer__copyright-area">
        <p className="footer__copyright-text">Maroon <img src={copyrightSvg} alt="Copyright" /> 2020 Все права защищены</p>
        <Link className="footer__copyright-link" to="#">
          <p className="footer__copyright-text">Политика конфиденциальности</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
