import "./FillFormSection.scss";
import picture from "../../../images/fill-form-pic.png";
import TwoColoredBlock from "../../utils-components/TwoColoredBlock/TwoColoredBlock";
import LinkButton from "../../utils-components/LinkButton/LinkButton";
import { AppRoute } from "../../../utils/consts";

function FillFormSection() {
  return (
    <TwoColoredBlock>
      <div className="fill-form-colored">
        <h2 className="fill-form-colored__title">Индивидуальный уход</h2>
        <p className="fill-form-colored__text">
          Не&nbsp;всегда очевидно, какие элементы и&nbsp;минералы необходимы
          коже, а&nbsp;многочисленные эксперименты с&nbsp;разными средствами
          только ухудшают ее качество.
        </p>
        <p className="fill-form-colored__text">
          Заполните анкету, и&nbsp;мы подберем уход, подходящий именно вам,
          учитывая ваш образ жизни, место жительства и&nbsp;другие факторы.
        </p>
        <LinkButton text={"Заполнить анкету"} onClick={AppRoute.FillForm} />
      </div>
      <div className="fill-form-non-colored">
        <img className="fill-form-non-colored__picture" src={picture} />
      </div>
    </TwoColoredBlock>
  );
}

export default FillFormSection;
