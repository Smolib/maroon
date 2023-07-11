import { AppRoute } from "../../../utils/consts";
import LinkButton from "../../utils-components/LinkButton/LinkButton";
import "./NewCollectionSection.scss";

function NewCollectionSection() {
  return (
    <section className="new-collection">
      <div className="new-collection__wrapper">
        <h2 className="new-collection__title">
          Встречайте весну вместе с нами
        </h2>
        <p className="new-collection__text">
          Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой
        </p>
        <LinkButton text={"Подробнее"} onClick={AppRoute.Catalog} />
      </div>
    </section>
  );
}

export default NewCollectionSection;
