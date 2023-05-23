import SocialsList from "../utils-components/SocialsList/SocialsList";
import TwoColoredBlock from "../utils-components/TwoColoredBlock/TwoColoredBlock";
import "./MapSection.scss";

function MapSection() {
  return (
    <TwoColoredBlock>
      <div className="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <dl className="contacts__list">
          <dt className="contacts__dt">Адрес</dt>
          <dd className="contacts__dd">
            Санкт-Петербург, ул.&nbsp;Большая&nbsp;Конюшенная,&nbsp;19
          </dd>
          <dt className="contacts__dt">Телефон</dt>
          <dd className="contacts__dd">+7 (923) 888-90-60</dd>
          <dt className="contacts__dt">E-mail</dt>
          <dd className="contacts__dd">info@maroon.ru</dd>
        </dl>
        <SocialsList />
      </div>
      <div className="map-area">
        <iframe
          className="map-area__map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aebf40e29335e8b74043e0b11987638e73ac45510d2e4a3e465d41c0ac8002fdf&amp;source=constructor"
          frameBorder="0"
        ></iframe>
      </div>
    </TwoColoredBlock>
  );
}

export default MapSection;
