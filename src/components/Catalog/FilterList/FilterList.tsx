import "./FilterList.scss";
import { TypeOfFilter } from "../../../types/filter";
import FilterItem from "../FilterItem/FilterItem";

type FilterListProps = {
  item: TypeOfFilter;
};

function FilterList({ item }: FilterListProps) {
  const { title, useFor, keys } = item;
  return (
    <fieldset className="filter-list">
      <div className="filter-list__title-area">
        <h3 className="filter-list__title">{title}</h3>
        <button className="filter-list__button">btn</button>
      </div>
      <ul className="filter-list__list">
        {keys.map((name) => (
          <FilterItem
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

export default FilterList;
