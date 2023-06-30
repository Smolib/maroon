import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
} from "react";
import { FilterDefaultData, FilterSettings } from "../../../utils/consts";
import FilterList from "../FilterList/FilterList";
import "./Filter.scss";
import SearchDataContext from "../../../context/SearchDataContext";
import { TypeOfSettingsFilter } from "../../../types/filter";

type FilterProps = {
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
  choosenValues: TypeOfSettingsFilter;
  setChoosenValues: Dispatch<SetStateAction<TypeOfSettingsFilter>>;
};
function Filter({ setIsMenuOpened, choosenValues, setChoosenValues }: FilterProps) {
  const { setSearchData } = useContext(SearchDataContext);
  const handleSubmit = (evt: FormEvent<EventTarget>) => {
    evt.preventDefault();
    setSearchData(choosenValues);
    setIsMenuOpened(false);
  };
  const handleReset = () => {
    setChoosenValues(FilterDefaultData);
    setSearchData(FilterDefaultData);
    setIsMenuOpened(false);
  };
  return (
    <form className="filter">
      {FilterSettings.map((item) => (
        <FilterList
          key={item.id}
          item={item}
          choosenValues={choosenValues}
          setChoosenValues={setChoosenValues}
        />
      ))}
      <div className="filter__button-area">
        <button className="filter__button" onClick={handleSubmit}>
          Применить
        </button>
        <button type="reset" className="filter__button" onClick={handleReset}>
          Сбросить
        </button>
      </div>
    </form>
  );
}

export default Filter;
