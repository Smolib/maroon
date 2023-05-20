import "./IntroSection.scss";
import introPic1 from "../../../images/intro-pic1.png";
import introPic2 from "../../../images/intro-pic2.png";
import arrow from "../../../images/arrow.svg";

function IntroSection() {
  return (
    <section className="intro">
      <div className="intro__wrapper">
        <a className="intro__link" href="">
          <figure className="intro__figure">
            <img
              className="intro__picture"
              src={introPic1}
              alt="Уход для лица"
            />
            <figcaption className="intro__link-description">
              Уход для лица
              <img src={arrow} className="intro__arrow" />
            </figcaption>
          </figure>
        </a>
        <div className="intro__about">
          <h1 className="intro__title">Maroon</h1>
          <p className="intro__description">
            Натуральная косметика для&nbsp;бережного ухода за&nbsp;кожей
          </p>
          <button className="intro__button">Подробнее</button>
        </div>
        <a className="intro__link" href="">
          <figure className="intro__figure">
            <img
              className="intro__picture"
              src={introPic2}
              alt="Уход для тела"
            />
            <figcaption className="intro__link-description">
              Уход для тела
              <img src={arrow} className="intro__arrow" />
            </figcaption>
          </figure>
        </a>
      </div>
    </section>
  );
}

export default IntroSection;
