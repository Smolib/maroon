import { useState } from "react";
import Filter from "../Filter/Filter";
import "./FilterSection.scss";
import close from "../../../images/close.svg";
import { TypeOfSettingsFilter } from "../../../types/filter";
import { FilterDefaultData } from "../../../utils/consts";
import AnimatedButton from "../../utils-components/AnimatedButton/AnimatedButton";

function FilterSection() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  function handleBurgerClick() {
    setIsMenuOpened(!isMenuOpened);
  }
  const [choosenValues, setChoosenValues] = useState<TypeOfSettingsFilter>(FilterDefaultData);
  return (
    <section className="filter-section">
      <h2 className="filter-section__title">Каталог</h2>
      {isMenuOpened ? (
        <button
          onClick={handleBurgerClick}
          className="filter-section__button"
        >
          <img alt="Кнопка меню" src={close} />
        </button>
      ) : (
        <AnimatedButton text={"Фильтр"} onClick={handleBurgerClick} typeOfButton={"button"} />
      )}
      {isMenuOpened && (
        <div className="filter-section__filter-area">
          <Filter
            choosenValues={choosenValues}
            setChoosenValues={setChoosenValues}
            setIsMenuOpened={setIsMenuOpened}
          />
        </div>
      )}
    </section>
  );
}

export default FilterSection;
