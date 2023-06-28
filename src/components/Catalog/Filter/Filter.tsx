import { FormEvent, useContext } from "react";
import { FilterContextDefaultData, FilterSettings } from "../../../utils/consts";
import FilterList from "../FilterList/FilterList";
import "./Filter.scss";
import SearchDataContext from "../../../context/SearchDataContext";

function Filter() {
  const { searchData, setSearchData } = useContext(SearchDataContext);
  const handleSubmit = (evt:FormEvent<EventTarget>) => {
    evt.preventDefault();
    console.log(searchData);
  };
  return (
    <form className="filter">
      {FilterSettings.map((item) => (
        <FilterList
          key={item.id}
          item={item}
        />
      ))}
      <div className="filter__button-area">
        <button className="filter__button" onClick={handleSubmit}>
          Применить
        </button>
        <button
          type="reset"
          className="filter__button"
          onClick={() => setSearchData(FilterContextDefaultData)}
        >
          Сбросить
        </button>
      </div>
    </form>
  );
}

export default Filter;
