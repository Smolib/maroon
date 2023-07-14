import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../utils/consts";

type NavProps = {
  type: "header" | "footer";
};

function Nav({ type }: NavProps) {
  const { pathname } = useLocation();
  return (
    <nav className={`nav nav_type_${type}`}>
      <ul className={`nav__list nav__list_type_${type}`}>
        <li className={`nav__item nav__item_type_${type}`}>
          <Link className={`nav__link nav__link_type_${type}`} to={AppRoute.Catalog}>
            Каталог
          </Link>
        </li>
        <li className={`nav__item nav__item_type_${type}`}>
          <Link
            className={`nav__link nav__link_type_${type}`}
            to={
              pathname === AppRoute.Main
                ? AppRoute.AboutThisPage
                : AppRoute.About
            }
          >
            О нас
          </Link>
        </li>
        {type === "footer" && (
          <li className={`nav__item nav__item_type_${type}`}>
            <Link
              className={`nav__link nav__link_type_${type}`}
              to={AppRoute.ContactsThisPage}
            >
              Магазины
            </Link>
          </li>
        )}
        <li className={`nav__item nav__item_type_${type}`}>
          <Link
            className={`nav__link nav__link_type_${type}`}
            to={
              pathname === AppRoute.Main || pathname === AppRoute.Catalog
                ? AppRoute.ContactsThisPage
                : AppRoute.Contacts
            }
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
