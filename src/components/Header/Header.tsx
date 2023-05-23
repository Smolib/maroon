import "./Header.scss";
import { useEffect, useState } from "react";
import logoSvg from "../../images/logo.svg";
import profileSvg from "../../images/profile.svg";
import cartSvg from "../../images/cart.svg";
import burger from "../../images/burger.svg";
import close from "../../images/close.svg";
import SocialsList from "../utils-components/SocialsList/SocialsList";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMenuColored, setIsMenuColored] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setScroll(window.scrollY);
    setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuColored(isMenuOpened);
  }, [isMenuOpened]);

  function handleBurgerClick() {
    setIsMenuOpened(!isMenuOpened);
  }
  return (
    <header
      className={`header ${
        isMenuColored || scroll > 0 ? "header_colored" : ""
      }`}
    >
      <a className="header__logo-link" href="#">
        <img className="header__logo" alt="Логотип Maroon" src={logoSvg} />
      </a>
      <button className="header__burger-button" onClick={handleBurgerClick}>
        <img alt="Кнопка меню" src={isMenuOpened ? close : burger} />
      </button>
      <div
        className={`header__nav-area ${
          isMenuOpened ? "header__nav-area_open" : ""
        }`}
      >
        <nav>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Каталог
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                О нас
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        {windowWidth <= 800 && <SocialsList />}
      </div>
      <div className="header__button-area">
        <button className="header__button">
          <img className="header__button-icon" alt="Профиль" src={profileSvg} />
        </button>
        <button className="header__button">
          <img className="header__button-icon" alt="Профиль" src={cartSvg} />
        </button>
      </div>
    </header>
  );
}

export default Header;
