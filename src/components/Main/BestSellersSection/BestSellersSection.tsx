import useCurrentWidth from "../../../hooks/useCurrentWidth";
import { AppRoute } from "../../../utils/consts";
import LinkButton from "../../utils-components/LinkButton/LinkButton";
import "./BestSellersSection.scss";
import SwiperBestsellers from "./SwiperBestsellers/SwiperBestsellers";

function BestSellersSection() {
  const width = useCurrentWidth();
  const button = <LinkButton onClick={AppRoute.Catalog} text={"Смотреть все"}/>;
  return (
    <section className="bestsellers">
      <div className="bestsellers__description-area">
        <h2 className="bestsellers__title">Бестселлеры</h2>
        <p className="bestsellers__text">Легендарные продукты, завоевавшие любовь наших клиентов</p>
        {width > 450 && button}
      </div>
      <SwiperBestsellers width={width}/>
      {width <= 450 && button}
    </section>
  );
}

export default BestSellersSection;
