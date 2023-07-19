import "./SubscribeSection.scss";
import image1 from "../../images/subscribe01.png";
import image2 from "../../images/subscribe02.png";
import image3 from "../../images/subscribe03.png";
import image4 from "../../images/subscribe04.png";
import image5 from "../../images/subscribe05.png";
import image6 from "../../images/subscribe06.png";
import AnimatedButton from "../utils-components/AnimatedButton/AnimatedButton";
import { AppRoute } from "../../utils/consts";

function SubscribeSection() {
  return (
    <section className="subscribe">
      <div className="subscribe__images-area">
        <img className="subscribe__image" src={image1} alt="Крем для кожи" />
        <img className="subscribe__image" src={image2} alt="Масла для тела" />
        <img
          className="subscribe__image"
          src={image3}
          alt="Косметика для лица"
        />
        <img className="subscribe__image" src={image4} alt="Набор косметики" />
        <img className="subscribe__image" src={image5} alt="Крем для тела" />
        <img className="subscribe__image" src={image6} alt="Масло для тела" />
      </div>
      <div className="subscribe__description-area">
        <h2 className="subscribe__title">Присоединяйтесь к&nbsp;нам</h2>
        <p className="subscribe__text">
          Подпишитесь на&nbsp;наш аккаунт{" "}
          <a className="subscribe__link" href="#" target="_blank">
            @marooncare
          </a>{" "}
          и&nbsp;узнавайте о&nbsp;новиках и&nbsp;акциях первыми
        </p>
        <AnimatedButton text={"Подписаться"} onClick={AppRoute.Subscribe} />
      </div>
    </section>
  );
}

export default SubscribeSection;
