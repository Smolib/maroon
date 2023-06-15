import "./Header.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoSvg from "../../images/logo.svg";
import profileSvg from "../../images/profile.svg";
import cartSvg from "../../images/cart.svg";
import burger from "../../images/burger.svg";
import close from "../../images/close.svg";
import SocialsList from "../utils-components/SocialsList/SocialsList";
import { AppRoute } from "../../utils/consts";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMenuColored, setIsMenuColored] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [scroll, setScroll] = useState(0);

  const { pathname } = useLocation();

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
      <Link className="header__logo-link" to={"/"}>
        <img className="header__logo" alt="Логотип Maroon" src={logoSvg} />
      </Link>
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
              <Link className="header__nav-link" to={"/catalog"}>
                Каталог
              </Link>
            </li>
            <li className="header__nav-item">
              {pathname === AppRoute.Main ? (
                <a href="#about" className="header__nav-link">
                  О нас
                </a>
              ) : (
                <Link className="header__nav-link" to={"/#about"}>
                  О нас
                </Link>
              )}
            </li>
            <li className="header__nav-item">
              {pathname === AppRoute.Main || pathname === AppRoute.Catalog ? (
                <Link className="header__nav-link" to={"#contacts"}>
                  Контакты
                </Link>
              ) : (
                <Link className="header__nav-link" to={"/#contacts"}>
                  Контакты
                </Link>
              )}
            </li>
          </ul>
        </nav>
        {windowWidth <= 800 && <SocialsList />}
      </div>
      <div className="header__buttons-area">
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
