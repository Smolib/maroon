import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TypeOfFilter, TypeOfSettingsFilter } from "../../../types/filter";
import { TypeOfItem } from "../../../types/item";

type FilterItemProps = {
  name: TypeOfItem["category"] | TypeOfItem["skin"];
  useFor: TypeOfFilter["useFor"];
  title: TypeOfFilter["title"];
  choosenValues: TypeOfSettingsFilter;
  setChoosenValues: Dispatch<SetStateAction<TypeOfSettingsFilter>>;
};

function FilterItem({
  name,
  useFor,
  title,
  choosenValues,
  setChoosenValues,
}: FilterItemProps) {
  const [isChoose, setIsChoose] = useState(
    (choosenValues[useFor] as TypeOfFilter["keys"]).includes(name),
  );
  useEffect(() => {
    setIsChoose((choosenValues[useFor] as TypeOfFilter["keys"]).includes(name));
  }, [choosenValues]);
  const handleClick = () => {
    if (isChoose) {
      const newData = (choosenValues[useFor] as TypeOfFilter["keys"]).filter(
        (i) => i !== name,
      );
      setChoosenValues({
        ...choosenValues,
        [useFor]: newData,
      });
    } else {
      setChoosenValues({
        ...choosenValues,
        [useFor]: [...choosenValues[useFor], name],
      });
    }
  };
  const handleChangeInput = () => {
    setIsChoose(!isChoose);
  };
  return (
    <li className="filter-list__item">
      <input
        className="filter-list__input"
        type="checkbox"
        id={`${title}-${name}`}
        checked={isChoose}
        onChange={handleChangeInput}
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
