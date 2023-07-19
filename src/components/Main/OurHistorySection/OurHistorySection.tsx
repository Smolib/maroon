import { AppRoute } from "../../../utils/consts";
import AnimatedButton from "../../utils-components/AnimatedButton/AnimatedButton";
import "./OurHistorySection.scss";

function OurHistorySection() {
  return (
    <section className="our-history" id="about">
      <div className="our-history__wrapper">
        <p className="our-history__text">
          “Мы&nbsp;стремимся сделать уход за&nbsp;кожей доступным
          и&nbsp;приятным ритуалом для всех, кто хочет заботиться о&nbsp;себе
          и&nbsp;своем теле”
        </p>
        <AnimatedButton text={"Наша история"} onClick={AppRoute.AboutThisPage} />
      </div>
    </section>
  );
}

export default OurHistorySection;
