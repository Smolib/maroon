import "./FilterList.scss";
import {
  Dispatch, SetStateAction, memo, useState,
} from "react";
import { TypeOfFilter, TypeOfSettingsFilter } from "../../../types/filter";
import FilterItem from "../FilterItem/FilterItem";

type FilterListProps = {
  item: TypeOfFilter;
  choosenValues: TypeOfSettingsFilter;
  setChoosenValues: Dispatch<SetStateAction<TypeOfSettingsFilter>>;
};

function FilterList({
  item,
  choosenValues,
  setChoosenValues,
}: FilterListProps) {
  const { title, useFor, keys } = item;
  const [isListOpen, setIsListOpen] = useState(false);
  const handleButtonClick = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <fieldset className="filter-list">
      <div className="filter-list__title-area" onClick={handleButtonClick}>
        <h3 className="filter-list__title">{title}</h3>
        <button
          type="button"
          className={`filter-list__button${
            !isListOpen ? " filter-list__button_open" : ""
          }`}
          onClick={handleButtonClick}
        />
      </div>
      <ul
        className={`filter-list__list ${
          !isListOpen && "filter-list__list_hide"
        }`}
      >
        {keys.map((name) => (
          <FilterItem
            choosenValues={choosenValues}
            setChoosenValues={setChoosenValues}
            name={name}
            useFor={useFor}
            title={title}
            key={`${title}-${name}`}
          />
        ))}
      </ul>
    </fieldset>
  );
}

export default memo(FilterList);
