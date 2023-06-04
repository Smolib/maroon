import "./BestSellersSection.scss";
import SwiperBestsellers from "./SwiperBestsellers/SwiperBestsellers";

function BestSellersSection() {
  return (
    <section className="bestsellers">
      <div className="bestsellers__description-area">
        <h2 className="bestsellers__title">Бестселлеры</h2>
        <p className="bestsellers__text">Легендарные продукты, завоевавшие любовь наших клиентов</p>
        <button className="bestsellers__button"><span className="bestsellers__button-name">Смотреть все</span></button>
      </div>
      <SwiperBestsellers />
    </section>
  );
}

export default BestSellersSection;
