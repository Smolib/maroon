import { useParams } from "react-router-dom";
import "./ItemSection.scss";
import {
  FormEvent, Fragment, useEffect, useState,
} from "react";
import getItem from "../../../utils/item";
import { TypeOfItem } from "../../../types/item";
import InfoAccordeon from "./InfoArea/InfoAccordeon";
import AnimatedButton from "../../utils-components/AnimatedButton/AnimatedButton";
import RadioInputListItem from "../../utils-components/RadioInputListItem/RadioInputListItem";

function ItemSection() {
  const params = useParams();
  const [item, setItem] = useState<TypeOfItem | null>(null);
  const [currentPrice, setCurrentPrice] = useState<number | undefined>(
    undefined,
  );
  const [currentRadioCheched, setCurrentRadioCheched] = useState<number>(0);

  useEffect(() => setItem(getItem(Number(params.id))), [params]);
  useEffect(() => setCurrentPrice(item?.variants[currentRadioCheched].price));

  const handleSubmit = (evt: FormEvent<EventTarget>) => {
    evt.preventDefault();
  };

  if (!item) {
    return <div>Упс! Такого товара не существует!</div>;
  }
  return (
    <section className="item-section">
      <img className="item-section__image" src={item.image} />
      <div className="item-section__info-area">
        <h1 className="item-section__title">{item.name}</h1>
        <p className="item-section__short-description">
          {item.shortDescription}
        </p>
        <div className="item-section__description-area">
          {item.description.map((text) => (
            <p className="item-section__description" key={text}>
              {text}
            </p>
          ))}
        </div>
        <InfoAccordeon name={"Состав"} text={item.composition} />
        <InfoAccordeon name={"Способ применения"} text={item.instruction} />
        <form className="item-section__form">
          <div className="item-section__variants-area">
            <span className="item-section__variants-name">Объем:</span>
            <ul className="item-section__variants-list">
              {item.variants.map(({ volume }, i) => (
                <Fragment key={i}>
                  <RadioInputListItem
                    name={`${volume}${item.units}`}
                    title={`${volume}`}
                    handleChangeInput={() => setCurrentRadioCheched(i)}
                    isChoose={i === currentRadioCheched}
                    type={"radio"}
                  />
                </Fragment>
              ))}
            </ul>
          </div>
          <div className="item-section__price-area">
            <div>
              <span className="item-section__price">{currentPrice}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
              >
                <path
                  d="M2.4484 19V15.381H0V13.6513H2.4484V11.2829H0V9.2605H2.4484V0H7.73921C10.197 0 12.0169 0.470122 13.1989 1.41036C14.3996 2.35061 15 3.71662 15 5.5084C15 7.31793 14.3527 8.73716 13.0582 9.76611C11.7636 10.7773 9.85929 11.2829 7.34522 11.2829H4.98124V13.6513H9.62477V15.381H4.98124V19H2.4484ZM4.98124 9.2605H6.97936C8.68668 9.2605 10.0094 8.9944 10.9475 8.46218C11.9043 7.92997 12.3827 6.97199 12.3827 5.58824C12.3827 4.38189 11.9887 3.486 11.2008 2.90056C10.4128 2.31513 9.18386 2.02241 7.51407 2.02241H4.98124V9.2605Z"
                  fill="#122947"
                />
              </svg>
            </div>
            <AnimatedButton
              text={"Добавить в корзину"}
              onClick={handleSubmit}
              typeOfButton={"submit"}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ItemSection;
