import { useContext } from "react";
import SearchDataContext from "../../../context/SearchDataContext";
import { TypeOfFilter } from "../../../types/filter";
import { TypeOfItem } from "../../../types/item";

type FilterItemProps = {
  name: TypeOfItem["category"] | TypeOfItem["skin"];
  useFor: TypeOfFilter["useFor"];
  title: TypeOfFilter["title"];
};

function FilterItem({
  name,
  useFor,
  title,
}: FilterItemProps) {
  const { searchData, setSearchData } = useContext(SearchDataContext);
  const handleClick = () => {
    const isChoose = (searchData[useFor] as TypeOfFilter["keys"]).includes(name);
    if (isChoose) {
      const newData = (searchData[useFor]as TypeOfFilter["keys"]).filter((i) => i !== name);
      setSearchData({
        ...searchData, [useFor]: newData,
      });
    } else {
      setSearchData({
        ...searchData, [useFor]: [...searchData[useFor], name],
      });
    }
  };
  return (
    <li className="filter-list__item">
      <input
        className="filter-list__input"
        type="checkbox"
        id={`${title}-${name}`}
      />
      <label
        onClick={handleClick}
        className="filter-list__label"
        htmlFor={`${title}-${name}`}
      >
        {name}
      </label>
    </li>
  );
}

export default FilterItem;
