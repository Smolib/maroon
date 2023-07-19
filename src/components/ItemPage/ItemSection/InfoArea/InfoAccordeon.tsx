import { useState } from "react";
import "./InfoAccordeon.scss";

type InfoAccordeonProps = {
  name: string;
  text: string[] | string;
};

function InfoAccordeon({ name, text }: InfoAccordeonProps) {
  const [isListOpen, setIsListOpen] = useState(false);
  const handleButtonClick = () => {
    setIsListOpen(!isListOpen);
  };

  const writeText = () => {
    if (typeof text === "string") {
      return <p className="info-accordeon__text">{text}</p>;
    }
    return text.map((item, i) => <p className="info-accordeon__text" key={i}>{item}</p>);
  };

  return (
    <div className="info-accordeon">
      <div className="info-accordeon__title-area" onClick={handleButtonClick}>
        <h3 className="info-accordeon__title">{name}</h3>
        <button
          type="button"
          className={`info-accordeon__button${
            !isListOpen ? " info-accordeon__button_open" : ""
          }`}
          onClick={handleButtonClick}
        />
      </div>
      {isListOpen ? writeText() : ""}
    </div>
  );
}

export default InfoAccordeon;
