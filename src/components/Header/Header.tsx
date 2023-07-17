import "./Header.scss";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoSvg from "../../images/logo.svg";
import profileSvg from "../../images/profile.svg";
import cartSvg from "../../images/cart.svg";
import burger from "../../images/burger.svg";
import close from "../../images/close.svg";
import SocialsList from "../utils-components/SocialsList/SocialsList";
import Nav from "../Nav/Nav";
import { AppRoute } from "../../utils/consts";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMenuColored, setIsMenuColored] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [scroll, setScroll] = useState(0);

  const headerRef = useRef<HTMLHeadingElement>(null);

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
    setIsMenuColored(isMenuOpened);
  }, [isMenuOpened]);

  const closeMenu = () => {
    setIsMenuOpened(false);
  };
  useEffect(() => {
    const onClick = (evt: MouseEvent) => {
      if (
        headerRef.current
        && !headerRef.current.contains(evt.target as HTMLElement)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function handleBurgerClick() {
    setIsMenuOpened(!isMenuOpened);
  }
  return (
    <header ref={headerRef}
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
        <Nav type="header" onClickLinks={closeMenu}/>
        {windowWidth <= 800 && <SocialsList />}
      </div>
      <div className="header__buttons-area">
        <Link className="header__button" to={AppRoute.Profile}>
          <img className="header__button-icon" alt="Профиль" src={profileSvg} />
        </Link>
        <Link className="header__button" to={AppRoute.Cart}>
          <img className="header__button-icon" alt="Профиль" src={cartSvg} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
