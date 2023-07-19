import { ChangeEventHandler } from "react";
import "./RadioInputListItem.scss";

type RadioInputListItemProps = {
  name: string;
  title: string;
  handleChangeInput: ChangeEventHandler<HTMLInputElement>;
  isChoose: boolean;
  type: "checkbox" | "radio";
};

function RadioInputListItem({
  name,
  title,
  handleChangeInput,
  isChoose,
  type,
}: RadioInputListItemProps) {
  return (
    <li className="radio-input-list-item">
      <input
        className="radio-input-list-item__input"
        type={type}
        name={title}
        id={`${title}-${name}`}
        checked={isChoose}
        onChange={handleChangeInput}
      />
      <label
        className="radio-input-list-item__label"
        htmlFor={`${title}-${name}`}
      >
        {name}
      </label>
    </li>
  );
}

export default RadioInputListItem;
