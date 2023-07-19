import {
  Dispatch, SetStateAction, useEffect, useState,
} from "react";
import { TypeOfFilter, TypeOfSettingsFilter } from "../../../types/filter";
import { TypeOfItem } from "../../../types/item";
import RadioInputListItem from "../../utils-components/RadioInputListItem/RadioInputListItem";

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
  const handleChangeInput = () => {
    setIsChoose(!isChoose);
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
  return (
    <RadioInputListItem
      name={name}
      title={title}
      handleChangeInput={handleChangeInput}
      isChoose={isChoose}
      type={"checkbox"}
    />
  );
}

export default FilterItem;
