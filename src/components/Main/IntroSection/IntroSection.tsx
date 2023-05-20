import "./IntroSection.scss";
import { useEffect, useState } from "react";
import introPic1 from "../../../images/intro-pic1.png";
import introPic2 from "../../../images/intro-pic2.png";
import introPic1Tablet from "../../../images/intro-pic1-tablet.png";
import introPic2Tablet from "../../../images/intro-pic2-tablet.png";
import introPic1Mobile from "../../../images/intro-pic1-mobile.png";
import introPic2Mobile from "../../../images/intro-pic2-mobile.png";
import arrow from "../../../images/arrow.svg";

function IntroSection() {
  const [windowSize, setWindowSize] = useState(0);
  const [imageLeft, setImageLeft] = useState("");
  const [imageRight, setImageRight] = useState("");

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleWindowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("scroll", handleWindowSize);
  }, []);

  useEffect(() => {
    switch (true) {
    case windowSize > 800:
      setImageLeft(introPic1);
      setImageRight(introPic2);
      break;

    case windowSize <= 800 && windowSize > 450:
      setImageLeft(introPic1Tablet);
      setImageRight(introPic2Tablet);
      break;

    case windowSize <= 450:
      setImageLeft(introPic1Mobile);
      setImageRight(introPic2Mobile);
      break;

    default:
      setImageLeft(introPic1);
      setImageRight(introPic2);
    }
  }, [windowSize]);

  return (
    <section className="intro">
      <div className="intro__wrapper">
        <a className="intro__link" href="">
          <figure className="intro__figure">
            <img
              className="intro__picture"
              src={imageLeft}
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
              src={imageRight}
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
