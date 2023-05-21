import "./FillFormSection.scss";
import picture from "../../../images/fill-form-pic.png";

function FillFormSection() {
  return (
    <section className="fill-form">
      <div className="fill-form__wrapper">
        <div className="fill-form__description-area">
          <h2 className="fill-form__title">Индивидуальный уход</h2>
          <p className="fill-form__text">
            Не&nbsp;всегда очевидно, какие элементы и&nbsp;минералы необходимы
            коже, а&nbsp;многочисленные эксперименты с&nbsp;разными средствами только
            ухудшают ее качество.
          </p>
          <p className="fill-form__text">
            Заполните анкету, и&nbsp;мы подберем уход, подходящий именно
            вам, учитывая ваш образ жизни, место жительства и&nbsp;другие
            факторы.
          </p>
          <button className="fill-form__button"><span className="fill-form__button-name">Заполнить анкету</span></button>
        </div>
        <img className="fill-form__picture" src={picture} />
      </div>
    </section>
  );
}

export default FillFormSection;
