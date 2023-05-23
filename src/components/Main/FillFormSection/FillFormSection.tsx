import "./FillFormSection.scss";
import picture from "../../../images/fill-form-pic.png";
import TwoColoredBlock from "../../utils-components/TwoColoredBlock/TwoColoredBlock";

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
        <button className="fill-form-colored__button">
          <span className="fill-form-colored__button-name">Заполнить анкету</span>
        </button>
      </div>
      <div className="fill-form-non-colored">
        <img className="fill-form-non-colored__picture" src={picture} />
      </div>
    </TwoColoredBlock>
  );
}

export default FillFormSection;
