import { useState } from "react";
import Filter from "../Filter/Filter";
import "./FilterSection.scss";
import close from "../../../images/close.svg";

function FilterSection() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  function handleBurgerClick() {
    setIsMenuOpened(!isMenuOpened);
  }
  return (
    <section className="filter-section">
      <h2 className="filter-section__title">Каталог</h2>
      <button
        onClick={handleBurgerClick}
        className={`filter-section__button filter-section__button_${
          isMenuOpened ? "close" : "open"
        }`}
      >
        {isMenuOpened ? <img alt="Кнопка меню" src={close} /> : "Фильтр"}
      </button>
      {isMenuOpened && (
        <div className="filter-section__filter-area">
          <Filter />
        </div>
      )}
    </section>
  );
}

export default FilterSection;
